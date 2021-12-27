/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ParagraphComponentFragment } from '../generated/graphql'
import { TextChunkComponent } from './TextChunkComponent'

interface ParagraphProps {
  fragment: ParagraphComponentFragment
}

export const isEmptyParagraph = (
  fragment: ParagraphComponentFragment
): boolean =>
  !fragment.chunks ||
  fragment.chunks
    .map((chunk) => (chunk && chunk.text ? chunk.text.length : 0))
    .reduce((agg, curr) => agg + curr) === 0

export const ParagraphComponent = ({
  fragment,
}: ParagraphProps): JSX.Element => {
  if (!fragment.chunks) {
    return <></>
  } else {
    return (
      <p
        css={css`
          color: #0a0a0a;
          margin: 0px;
        `}
        contentEditable={false}
      >
        {fragment.chunks.map((chunk, index) =>
          chunk ? <TextChunkComponent key={index} fragment={chunk} /> : <></>
        )}
      </p>
    )
  }
}

ParagraphComponent.fragment = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }

  ${TextChunkComponent.fragment}
`
