import React from 'react';
import GitHubButton from 'react-github-btn';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px 0;
`;

export const SocialButtons = () => {
  return (
    <Wrapper>
      <GitHubButton
        href="https://github.com/spences10/cheat-sheets"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star spences10/cheat-sheets on GitHub">
        Star
      </GitHubButton>
      <GitHubButton
        href="https://github.com/spences10"
        data-size="large"
        data-show-count="true"
        aria-label="Follow @spences10 on GitHub">
        Follow @spences10
      </GitHubButton>
      <GitHubButton
        href="https://github.com/spences10/cheat-sheets/subscription"
        data-icon="octicon-eye"
        data-size="large"
        data-show-count="true"
        aria-label="Watch spences10/cheat-sheets on GitHub">
        Watch
      </GitHubButton>
      <GitHubButton
        href="https://github.com/spences10/cheat-sheets/fork"
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork spences10/cheat-sheets on GitHub">
        Fork
      </GitHubButton>
      <GitHubButton
        href="https://github.com/spences10/cheat-sheets/issues"
        data-icon="octicon-issue-opened"
        data-size="large"
        data-show-count="true"
        aria-label="Issue spences10/cheat-sheets on GitHub">
        Issue
      </GitHubButton>
      <GitHubButton
        href="https://github.com/spences10/cheat-sheets/archive/master.zip"
        data-icon="octicon-cloud-download"
        data-size="large"
        aria-label="Download spences10/cheat-sheets on GitHub">
        Download
      </GitHubButton>
    </Wrapper>
  );
};
