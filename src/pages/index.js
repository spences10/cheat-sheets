import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Highlighter from 'react-highlight-words'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { GitHubCorner } from '../components/github-corner'
import { P } from '../components/md-page-elements'
import { SocialButtons } from '../components/social-buttons'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { ogImageUrl } from '../util/og-image-url-build'

const StyledInput = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: solid 1px ${({ theme }) => theme.colors.gray[500]};
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  padding: ${({ theme }) => theme.spacing[2]};
  &:focus {
    outline: 3px dashed ${({ theme }) => theme.colors.blue[500]};
  }
  margin-bottom: ${({ theme }) => theme.spacing[10]};
`

const SheetTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.sans};
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing[2]} 0;
  display: block;
`

const StyledP = styled(P)`
  margin: ${({ theme }) => theme.spacing[2]} 0;
`

const StyledDescription = styled(P)`
  font-size: ${({ theme }) => theme.fontSize['1xl']};
`

export const StyledLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.colors.gray[900]};
  &:focus {
    outline: 3px dashed ${({ theme }) => theme.primaryAccent};
  }
  padding: 3px;
  &:hover {
    color: ${({ theme }) => theme.colors.blue[500]};
  }
  &:active {
    color: ${({ theme }) => theme.colors.red[500]};
  }
`

const LinkTitle = styled(StyledLink)`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
  display: block;
`

const LinkLink = styled(StyledLink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  display: block;
`

export default ({ data }) => {
  const {
    description,
    image,
    title,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata()

  const allSheets = data.allMdx.nodes
  const emptyQuery = ''

  const [state, stateSet] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = e => {
    const query = e.target.value
    const sheets = data.allMdx.nodes || []

    const filteredData = sheets.filter((sheet, i) => {
      const {
        frontmatter: { title },
        tableOfContents: { items },
      } = sheet

      const toc = items.map(item => {
        return item.title
      })
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (toc &&
          toc.join('').toLowerCase().includes(query.toLowerCase()))
      )
    })

    stateSet({ query, filteredData })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const sheets = hasSearchResults ? filteredData : allSheets

  return (
    <>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Helmet encodeSpecialCharacters={false}>
        <meta
          property="og:image"
          content={ogImageUrl(authorName, 'cheatsheets.xyz', title)}
        />
        <meta
          name="twitter:image:src"
          content={ogImageUrl(authorName, 'cheatsheets.xyz', title)}
        />
      </Helmet>
      <GitHubCorner />
      <SocialButtons />
      <StyledDescription>{description}</StyledDescription>
      <StyledInput
        aria-label="search input box"
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
      {Object.keys(sheets).length === 0 ? (
        <SheetTitle>
          Nothing for that search term.
          <span
            style={{ paddingLeft: '5px' }}
            role="img"
            aria-label="cry emoji"
          >
            😭
          </span>
        </SheetTitle>
      ) : (
        sheets.map(post => {
          const {
            id,
            fields: { slug },
            frontmatter: { title },
            tableOfContents: { items },
          } = post

          return (
            <article key={`${id}${title}`}>
              <SheetTitle>
                <LinkTitle to={slug} aria-label={`Link for ${title}`}>
                  <Highlighter
                    searchWords={[query]}
                    autoEscape={true}
                    textToHighlight={title}
                    highlightClassName="highlight"
                  >
                    {title}
                  </Highlighter>
                </LinkTitle>
              </SheetTitle>
              {items.map(item => {
                return (
                  <StyledP key={`${id}${slug}${item.url}`}>
                    <LinkLink to={`${slug}${item.url}`}>
                      <Highlighter
                        searchWords={[query]}
                        autoEscape={true}
                        textToHighlight={item.title}
                        highlightClassName="highlight"
                      >
                        {item.title}
                      </Highlighter>
                    </LinkLink>
                  </StyledP>
                )
              })}
            </article>
          )
        })
      )}
    </>
  )
}

export const indexQuery = graphql`
  {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        id
        frontmatter {
          title
          createdDate
          updatedDate
          published
        }
        tableOfContents
        fields {
          slug
        }
      }
    }
  }
`
