/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import Prism from 'prismjs'

interface FileContentComponentProps {
  fileContent: string
  heightSpecification?: { specify: 'height' | 'max-height'; height: number }
}

const InnerComponent = ({
  fileContent,
  heightSpecification,
}: FileContentComponentProps): JSX.Element => {
  const codeElement = useRef<HTMLElement>(null)
  useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current)
    }
  })

  if (!heightSpecification) {
    return (
      <pre>
        <code ref={codeElement} className={'lang-js'}>
          {fileContent}
        </code>
      </pre>
    )
  } else {
    switch (heightSpecification.specify) {
      case 'height':
        return (
          <pre>
            <code
              css={css`
                height: ${heightSpecification.height}px;
                overflow-y: auto;
                display: block;
              `}
              ref={codeElement}
              className={'lang-js'}
            >
              {fileContent}
            </code>
          </pre>
        )
      case 'max-height':
        return (
          <pre>
            <code
              css={css`
                max-height: ${heightSpecification.height}px;
                overflow-y: auto;
                display: block;
              `}
              ref={codeElement}
              className={'lang-js'}
            >
              {fileContent}
            </code>
          </pre>
        )
    }
  }
}

export const FileContentComponent = ({
  fileContent,
  heightSpecification,
}: FileContentComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        position: relative;
        padding: 8px;
        background-color: #2d2d2d;
      `}
    >
      <InnerComponent
        fileContent={fileContent}
        heightSpecification={heightSpecification}
      />
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
