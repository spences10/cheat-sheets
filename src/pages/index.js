import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import Highlighter from 'react-highlight-words'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import { GitHubCorner } from '../components/github-corner'
import { Layout } from '../components/layout'
import { SocialButtons } from '../components/social-buttons'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: solid 1px lightgray;
  font-size: 32px;
  font-family: ${props => props.theme.h1};
  padding-left: 5px;
  &:focus {
    outline: 3px dashed ${({ theme }) => theme.primaryAccent};
  }
`

const SheetTitle = styled.p`
  font-family: ${({ theme }) => theme.h1};
  font-size: 32px;
  font-weight: 700;
  margin: 25px 0;
`

const StyledP = styled.p`
  font-family: ${({ theme }) => theme.p};
`

const StyledDescription = styled.p`
  font-family: ${({ theme }) => theme.p};
  font-size: 26px;
`

export const StyledLink = styled(props => <Link {...props} />)`
  color: ${({ theme }) => theme.fontDark};
  &:focus {
    outline: 3px dashed ${({ theme }) => theme.primaryAccent};
  }
  padding: 3px;
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
  }
  &:active {
    color: ${({ theme }) => theme.secondary};
  }
`

const LinkTitle = styled(StyledLink)`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

const LinkLink = styled(StyledLink)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
    <Layout>
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
            <article key={id}>
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
                  <StyledP>
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
    </Layout>
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
          cover
        }
        tableOfContents
        fields {
          slug
        }
      }
    }
  }
`
