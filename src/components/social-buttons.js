import { Box } from '@chakra-ui/react'
import React from 'react'
import GitHubButton from 'react-github-btn'

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

export const SocialButtons = () => {
  return (
    <Box mt="20px">
      <Box as="div" display="inline-block" mr="5px">
        <Button
          ariaLabel={'Star spences10/cheat-sheets on GitHub'}
          dataIcon={'octicon-star'}
          route={'cheat-sheets/'}
        >
          Star
        </Button>
      </Box>
      <Box as="div" display="inline-block" mr="5px">
        <Button
          ariaLabel={'Fork spences10/cheat-sheets on GitHub'}
          dataIcon={'octicon-repo-forked'}
          route={'cheat-sheets/fork'}
        >
          Fork
        </Button>
      </Box>
      <Box as="div" display="inline-block" mr="5px">
        <Button ariaLabel={'Follow @spences10 on GitHub'}>
          Follow @spences10
        </Button>
      </Box>
    </Box>
  )
}
