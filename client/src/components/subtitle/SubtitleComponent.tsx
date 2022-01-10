/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { gql } from '@apollo/client'
import { SubtitleComponentFragment } from '../../lib/generated/graphql'

interface SubtitleComponentProps {
  fragment: SubtitleComponentFragment
}

export const isEmptySubtitleComponent = (
  fragment: SubtitleComponentFragment
): boolean => {
  return !fragment.text || fragment.text.length === 0
}

export const SubtitleComponent = ({
  fragment,
}: SubtitleComponentProps): JSX.Element => {
  if (!fragment.text || fragment.text.length === 0) {
    return <></>
  } else {
    return <h3>{fragment.text}</h3>
  }
}

SubtitleComponent.fragment = gql`
  fragment SubtitleComponent on Subtitle {
    text
  }
`
