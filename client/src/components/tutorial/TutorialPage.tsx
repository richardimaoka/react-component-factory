import { gql } from '@apollo/client'
import { TutorialPageFragment } from '../../lib/generated/graphql'
import { HeaderContainer } from '../header/HeaderContainer'
import { TutorialPageMainContainer } from './TutorialPageMainContainer'

interface InnerComponentProps {
  fragment: TutorialPageFragment
  currentPageNum: string
}

const InnerComponent = ({
  fragment,
  currentPageNum,
}: InnerComponentProps): JSX.Element => {
  if (!fragment.pages) {
    return <></>
  } else {
    const page = fragment.pages.find(
      (page) => page && page.pageNum === currentPageNum
    )
    if (!page) {
      return <></>
    } else {
      return (
        <TutorialPageMainContainer
          fragment={page}
          currentPageNum={currentPageNum}
        />
      )
    }
  }
}

interface TutorialPageProps {
  fragment: TutorialPageFragment
  currentPageNum: string
}

export const TutorialPage = ({
  fragment,
  currentPageNum,
}: TutorialPageProps): JSX.Element => {
  return (
    <>
      <HeaderContainer fragment={fragment} />
      <InnerComponent fragment={fragment} currentPageNum={currentPageNum} />
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
      ...TutorialPageMainContainer
    }
  }

  ${TutorialPageMainContainer.freagment}
  ${HeaderContainer.fragment}
`
