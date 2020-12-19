import { Button, useClipboard } from '@chakra-ui/react'
import React from 'react'

export const CopyButton = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value)
  return (
    <Button
      color="brand.lightGrey"
      aria-label="Copy text"
      textTransform="uppercase"
      fontWeight={600}
      role="button"
      onClick={onCopy}
    >
      {hasCopied ? 'Pasta!' : 'Copy!'}
    </Button>
  )
}
