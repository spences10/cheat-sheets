import { Flex, Grid, Spacer } from '@chakra-ui/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import {
  BashSvg,
  CssSvg,
  HtmlSvg,
  JavaScriptSvg,
  ReactSvg,
  TypeScriptSvg,
} from '../../assets'
import { CopyButton } from './copy-button'

export const Code = ({ children, className }) => {
  const language = className?.replace(/language-/, '')

  const showLanguage = () => {
    switch (language) {
      case 'typescript':
        return <TypeScriptSvg />
      case 'javascript':
        return <JavaScriptSvg />
      case 'js':
        return <JavaScriptSvg />
      case 'bash':
        return <BashSvg />
      case 'jsx':
        return <ReactSvg />
      case 'html':
        return <HtmlSvg />
      case 'css':
        return <CssSvg />
      default:
        return <div />
    }
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <Flex position="relative" direction="column" my={6}>
          <Grid
            h="50px"
            bg="brand.darkGrey"
            mb="-20px"
            borderTop="solid 2px"
            borderTopColor="brand.black"
            borderLeft="solid 2px"
            borderLeftColor="brand.black"
            borderRight="solid 2px"
            borderRightColor="brand.black"
            borderBottom="solid 1px"
            borderBottomColor="brand.black"
            templateColumns="auto 100px 80px"
            alignItems="center"
            justifyItems="center"
          >
            <Spacer />
            {showLanguage()}
            <CopyButton value={children.trim()} />
          </Grid>
          <pre
            className={className}
            style={{
              ...style,
              overflow: 'scroll',
              overflowY: 'hidden',
              marginTop: 20,
              marginBottom: 20,
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              position: 'relative',
              borderBottom: 'solid 2px',
              borderLeft: 'solid 2px',
              borderRight: 'solid 2px',
              borderBottomColor: '#000000',
              borderLeftColor: '#000000',
              borderRightColor: '#000000',
              backgroundColor: '#1f2127',
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        </Flex>
      )}
    </Highlight>
  )
}
