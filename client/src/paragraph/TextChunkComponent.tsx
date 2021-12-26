/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { gql } from '@apollo/client'
import { TextChunkComponentFragment } from '../generated/graphql'

export interface TextChunkProps {
  fragment: TextChunkComponentFragment
}

const InnerComponent = ({ fragment }: TextChunkProps): JSX.Element => {
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
        <InnerComponent fragment={fragment} />
      </a>
    )
  } else {
    return <InnerComponent fragment={fragment} />
  }
}

TextChunkComponent.fragment = gql`
  fragment TextChunkComponent on TextChunk {
    text
    highlight
    bold
    hyperlinkUrl
    strikeout
    inlineCode
  }
`
