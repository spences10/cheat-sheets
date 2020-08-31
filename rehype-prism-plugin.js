const preact = require('preact')
const { h } = preact
const renderToString = require('preact-render-to-string')
const rangeParser = require('parse-numeric-range')
const Highlight = require('prism-react-renderer')
const theme = require('prism-react-renderer/themes/nightOwl')
const visit = require('unist-util-visit')
const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/index')
const prismComponents = require('prismjs/components')

module.exports = options => ast => {
  visit(ast, 'element', node => {
    if (node.tagName === 'code') {
      const codeString = node.children[0].value
      const language =
        node.properties.className &&
        node.properties.className[0] &&
        node.properties.className[0].split('-')[1]

      const result = renderToString(
        h(Code, {
          codeString: codeString.trim(),
          language: language,
          highlight: node.properties.highlight,
          className: node.properties.className,
          metastring: node.properties.metastring,
          title: node.properties.title,
        })
      )

      node.children = [
        {
          value: result,
          type: 'text',
        },
      ]
    }
  })
}

try {
  // meta doesn't exist in the prismjs package. TOML files are rendered differently with the syntax highlighting so I removed it.
  loadLanguages(
    Object.keys(prismComponents.languages).filter(v => {
      return v !== 'meta' && v !== 'toml'
    })
  )
} catch (e) {
  // this is here in case prismjs ever removes a language, so we can easily debug
  console.log(e)
}

const calculateLinesToHighlight = meta => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const Code = ({
  codeString,
  language,
  className,
  metastring,
  highlight,
  title,
  ...props
}) => {
  const shouldHighlightLine = calculateLinesToHighlight(highlight)

  return h(
    Highlight.default,
    {
      ...Highlight.defaultProps,
      code: codeString,
      language: language,
      theme: theme,
      Prism: Prism,
    },
    ({ className, style, tokens, getLineProps, getTokenProps }) => {
      return h(
        'div',
        {
          className:
            'codeBlock toast-highlight mb-4 shadow-xl text-sm',
        },
        [
          title &&
            h(
              'div',
              {
                className: className + ' text-sm px-5 py-4',
                style: style,
              },
              title
            ),
          h(
            'pre',
            {
              className: className + ' p-5 mt-0 overflow-auto',
              style: {
                ...style,
                borderTop: title ? '1px solid #8BADC1' : 'unset',
              },
            },
            tokens.map((line, i) => {
              const lineProps = getLineProps({ line, key: i })
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }
              return h(
                'div',
                { ...lineProps, key: i },
                line.map((token, key) =>
                  h('span', {
                    ...getTokenProps({ token, key }),
                    key,
                  })
                )
              )
            })
          ),
        ]
      )
    }
  )
}
