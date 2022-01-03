/** @jsxImportSource @emotion/react */ jjimport { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { TutorialPageMainContainerFragment } from '../../lib/generated/graphql'

interface TutorialPageMainContainerProps {
  fragment: TutorialPageMainContainerFragment
}

export const TutorialPageMainContainer = ({
  fragment,
}: TutorialPageMainContainerProps): JSX.Element => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 752px;
            padding: 8px;
          `}
        ></div>
      </div>
    </main>
  )
}

TutorialPageMainContainer.freagment = gql`
  fragment TutorialPageMainContainer on Page {
    id
    pageNum
    nextPageNum
    prevPageNum
    title
  }
`
