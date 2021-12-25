/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

export type TextChunkComponentFragment = {
  __typename?: 'TextChunk'
  text: string | null
  highlight: boolean | null
  bold: boolean | null
  hyperlinkUrl: string | null
  strikeout: boolean | null
  inlineCode: boolean | null
}

interface TextChunkProps {
  fragment: TextChunkComponentFragment
}

const InnerTextChunkComponent = ({ fragment }: TextChunkProps): JSX.Element => {
  const cssProperties = css`
    background-color: ${fragment.highlight ? '#E6FF01' : 'transparent'};
    font-weight: ${fragment.bold ? 'bold' : 'normal'};
    text-decoration: ${fragment.strikeout ? 'line-through' : 'no'};
  `

  return fragment.inlineCode ? (
    <code
      css={css`
        background-color: #252525;
        color: white;
      `}
    >
      {fragment.text}
    </code>
  ) : (
    <span css={cssProperties}>{fragment.text}</span>
  )
}

export const TextChunkComponent = ({
  fragment,
}: TextChunkProps): JSX.Element => {
  if (fragment.hyperlinkUrl) {
    return (
      <a href={fragment.hyperlinkUrl}>
        <InnerTextChunkComponent fragment={fragment} />
      </a>
    )
  } else {
    return <InnerTextChunkComponent fragment={fragment} />
  }
}
export type ParagraphComponentFragment = {
  __typename?: 'Paragraph'
  chunks: Array<{
    __typename?: 'TextChunk'
    text: string | null
    highlight: boolean | null
    bold: boolean | null
    hyperlinkUrl: string | null
    strikeout: boolean | null
    inlineCode: boolean | null
  } | null> | null
}

interface ParagraphProps {
  fragment: ParagraphComponentFragment
}

export const ParagraphComponent = ({
  fragment,
}: ParagraphProps): JSX.Element => {
  if (!fragment.chunks) {
    return <React.Fragment />
  } else {
    return (
      <div
        css={css`
          padding: 8px;
        `}
        contentEditable
      >
        <p
          css={css`
            color: #0a0a0a;
            margin: 0px;
          `}
        >
          {fragment.chunks.map((chunk, index) =>
            chunk ? (
              <TextChunkComponent key={index} fragment={chunk} />
            ) : (
              <React.Fragment />
            )
          )}
        </p>
      </div>
    )
  }
}

export const MainContainer = (): JSX.Element => {
  return (
    <main>
      <div
        css={css`
          width: 750px;
        `}
      >
        <ParagraphComponent
          fragment={{
            __typename: 'Paragraph',
            chunks: [
              {
                __typename: 'TextChunk',
                text: 'Something There',
                highlight: null,
                bold: null,
                hyperlinkUrl: null,
                strikeout: null,
                inlineCode: null,
              },
            ],
          }}
        />
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
