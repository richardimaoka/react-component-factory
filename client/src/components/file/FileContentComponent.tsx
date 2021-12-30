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
        padding: 8px;
        background-color: #2d2d2d;
      `}
    >
      <pre>
        <code ref={codeElement} className={'lang-js'}>
          {fileContent}
        </code>
      </pre>
    </div>
  )
}
