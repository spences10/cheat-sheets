import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
} from 'react-live';
import styled from 'styled-components';
import 'victormono';
import { copyToClipboard } from '../../util/copy-to-clipboard';
// import { Dump } from '../utils/helpers'

export const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  font-family: 'Victor Mono', 'Courier New', Courier, monospace;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

export const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }

  const handleClick = () => {
    copyToClipboard(codeString);
  };

  return (
    <>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <Pre className={className} style={style}>
            <CopyCode onClick={handleClick}>Copy</CopyCode>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </>
  );
};
