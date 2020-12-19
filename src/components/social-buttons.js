import React from 'react'
import GitHubButton from 'react-github-btn'
// import styled from 'styled-components';

const Button = ({
  ariaLabel,
  dataIcon,
  count,
  size,
  route,
  children,
}) => {
  return (
    <GitHubButton
      aria-label={ariaLabel}
      data-icon={dataIcon}
      data-show-count={true}
      data-size={null}
      href={`https://github.com/spences10/${route || ''}`}
    >
      {children}
    </GitHubButton>
  )
}

// const Wrapper = styled.div`
//   margin-top: 20px;
// `;

// const ButtonWrapper = styled.div`
//   display: inline-block;
//   margin-right: 5px;
// `;

export const SocialButtons = () => {
  return (
    <div>
      <div>
        <Button
          ariaLabel={'Star spences10/cheat-sheets on GitHub'}
          dataIcon={'octicon-star'}
          route={'cheat-sheets/'}
        >
          Star
        </Button>
      </div>
      <div>
        <Button
          ariaLabel={'Fork spences10/cheat-sheets on GitHub'}
          dataIcon={'octicon-repo-forked'}
          route={'cheat-sheets/fork'}
        >
          Fork
        </Button>
      </div>
      <div>
        <Button ariaLabel={'Follow @spences10 on GitHub'}>
          Follow @spences10
        </Button>
      </div>
    </div>
  )
}
