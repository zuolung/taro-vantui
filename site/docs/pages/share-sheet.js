import MarkdownBox from '../components/markdown/index'
import React from 'react'

export default function Docs() {

return <MarkdownBox>
  {require('../../../src/components/share-sheet/share-sheet.md').default}
</MarkdownBox>
}