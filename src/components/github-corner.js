import { Box } from '@chakra-ui/react'
import React from 'react'
import gitHubCorner from '../../static/github-corner-right.svg'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export const GitHubCorner = () => {
  const { gitHubUrl } = useSiteMetadata()
  return (
    <Box
      as="a"
      position="absolute"
      top="-30"
      right="0"
      h="80px"
      w="80px"
      backgroundImage={`url(${gitHubCorner})`}
      role="link"
      aria-label="github repo link"
      href={gitHubUrl}
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}
