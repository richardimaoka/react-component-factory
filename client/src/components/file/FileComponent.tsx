/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import { FileComponentFragment } from '../../lib/generated/graphql'

interface FileComponentProps {
  fragment: FileComponentFragment
}

export const FileComponent = ({ fragment }: FileComponentProps) => {
  const codeElement = useRef<HTMLElement>(null)
  useEffect(() => {
    if (codeElement.current) {
      // Prism.highlightElement(codeElement.current)
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
          {fragment.content}
        </code>
      </pre>
    </div>
  )
}

FileComponent.fragment = gql`
  fragment FileComponent on File {
    fileName
    content
  }
`
