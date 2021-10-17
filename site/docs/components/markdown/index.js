import React from 'react'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
import './index.less'

const config = {
  highlight: function (str, lang) {
    return hljs.highlight(str, { language: lang !== 'js' ? 'xml' : 'js' }).value
  },
  html: true
}
const md = MarkdownIt(config)

export default function MarkdownBox(props) {
  return (
    <div className="docs-markdown-com">
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(props.children)
        }}
      />
    </div>
  )
}
