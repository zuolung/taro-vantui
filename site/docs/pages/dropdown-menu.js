import MarkdownBox from '../components/markdown/index'
import React from 'react'

export default function Docs() {

return <MarkdownBox>
  {require('../../../src/components/dropdown-menu/dropdown-menu.md').default}
</MarkdownBox>
}