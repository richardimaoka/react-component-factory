/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { TutorialPageTransitionComponentFragment } from '../../lib/generated/graphql'
import { TutorialPageNextButton } from './TutorialPageNextButton'
import { TutorialPagePrevButton } from './TutorialPagePrevButton'

interface TutorialPageTransitionComponentProps {
  fragment: TutorialPageTransitionComponentFragment
}

export const TutorialPageTransitionComponent = ({
  fragment,
}: TutorialPageTransitionComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      {fragment.prevPageNum ? <TutorialPagePrevButton /> : <div />}
      {fragment.nextPageNum ? <TutorialPageNextButton /> : <div />}
    </div>
  )
}

TutorialPageTransitionComponent.fragment = gql`
  fragment TutorialPageTransitionComponent on Page {
    nextPageNum
    prevPageNum
  }
`
