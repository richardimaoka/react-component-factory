/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { TutorialPageFragment } from '../../lib/generated/graphql'
import { HeaderContainer } from '../header/HeaderContainer'
import { TutorialPageMainContainer } from './TutorialPageMainContainer'

interface TutorialPageProps {
  fragment: TutorialPageFragment
}

export const TutorialPage = ({ fragment }: TutorialPageProps) => {
  return (
    <>
      <HeaderContainer fragment={fragment} />
      <TutorialPageMainContainer />
    </>
  )
}

TutorialPage.fragment = gql`
  fragment TutorialPage on Tutorial {
    ...HeaderContainer
    id
    author {
      id
    }
    title
    pages {
      id
      pageNum
      nextPageNum
      prevPageNum
      title
    }
  }

  ${HeaderContainer.fragment}
`
