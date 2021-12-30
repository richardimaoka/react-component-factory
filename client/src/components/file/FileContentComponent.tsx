/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import Prism from 'prismjs'

interface FileContentComponentProps {
  fileContent: string
}

export const FileContentComponent = ({
  fileContent,
}: FileContentComponentProps): JSX.Element => {
  const codeElement = useRef<HTMLElement>(null)
  useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current)
    }
  })

  return (
    <div
      css={css`
        position: relative;
        padding: 8px;
        background-color: #2d2d2d;
      `}
    >
      <pre>
        <code ref={codeElement} className={'lang-js'}>
          {fileContent}
        </code>
      </pre>
      <button
        css={css`
          position: absolute;
          right: 8px;
          top: 4px;
          background-color: #2d2d2d;
          border: solid 1px #888888;
          color: #ffffff;
        `}
      >
        copy
      </button>
    </div>
  )
}
