import { gql } from '@apollo/client'
import { TutorialPageFragment } from '../../lib/generated/graphql'
import { HeaderContainer } from '../header/HeaderContainer'
import { TutorialPageMainContainer } from './TutorialPageMainContainer'

interface InnerComponentProps {
  fragment: TutorialPageFragment
  pageNum: string
}

const InnerComponent = ({
  fragment,
  pageNum,
}: InnerComponentProps): JSX.Element => {
  if (!fragment.pages) {
    return <></>
  } else {
    const page = fragment.pages.find((page) => page && page.pageNum === pageNum)
    if (!page) {
      return <></>
    } else {
      return <TutorialPageMainContainer fragment={page} />
    }
  }
}

interface TutorialPageProps {
  fragment: TutorialPageFragment
  pageNum: string
}

export const TutorialPage = ({
  fragment,
  pageNum,
}: TutorialPageProps): JSX.Element => {
  return (
    <>
      <HeaderContainer fragment={fragment} />
      <InnerComponent fragment={fragment} pageNum={pageNum} />
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
