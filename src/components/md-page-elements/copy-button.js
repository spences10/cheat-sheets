import { Button, useClipboard } from '@chakra-ui/react'
import React from 'react'

export const CopyButton = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value)
  return (
    <Button aria-label="Copy text" role="button" onClick={onCopy}>
      {hasCopied ? 'Pasta!' : 'Copy!'}
    </Button>
  )
}
