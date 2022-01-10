/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { TutorialPageMainContainerFragment } from '../../lib/generated/graphql'
import { ActionComponent } from '../action/ActionComponent'
import { CarouselComponent } from '../carousel/CarouselComponent'
import { CommandComponent } from '../command/CommandComponent'
import { CommandOutputComponent } from '../command/CommandOutputComponent'
import { PageElementComponent } from '../elements/PageElementComponent'
import { FoldableComponent } from '../foldable/FoldableComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import { SubtitleComponent } from '../subtitle/SubtitleComponent'
import { TutorialPageProgressBar } from '../tutorial/TutorialPageProgressBar'
import { VideoComponent } from '../video/VideoComponent'

interface InnerComponentProps {
  fragment: TutorialPageMainContainerFragment
  currentPageNum: string
}

export const InnerComponent = ({
  fragment,
  currentPageNum,
}: InnerComponentProps): JSX.Element => {
  if (!fragment.pageElements || fragment.pageElements.length === 0) {
    return <></>
  } else {
    return (
      <div>
        <TutorialPageProgressBar
          numPages={fragment.pageElements.length}
          currentPageNum={currentPageNum}
        />
        <h2
          css={css`
            margin: 0px;
          `}
        >
          {fragment.title}
        </h2>
        <div>
          {fragment.pageElements.map((element) =>
            element ? <PageElementComponent fragment={element} /> : <></>
          )}
        </div>
      </div>
    )
  }
}

interface TutorialPageMainContainerProps {
  fragment: TutorialPageMainContainerFragment
  currentPageNum: string
}

export const TutorialPageMainContainer = ({
  fragment,
  currentPageNum,
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
        >
          <InnerComponent fragment={fragment} currentPageNum={currentPageNum} />
        </div>
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
    pageElements {
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on Command {
        ...CommandComponent
      }
      ... on CommandOutput {
        ...CommandOutputComponent
      }
      ... on Video {
        ...VideoComponent
      }
      ... on CarouselImage {
        ...CarouselComponent
      }
      ... on Action {
        ...ActionComponent
      }
      ... on Subtitle {
        ...SubtitleComponent
      }
      ... on Foldable {
        ...FoldableComponent
      }
    }
  }

  ${ParagraphComponent.fragment}
  ${CommandComponent.fragment}
  ${CommandOutputComponent.fragment}
  ${VideoComponent.fragment}
  ${CarouselComponent.fragment}
  ${ActionComponent.fragment}
  ${SubtitleComponent.fragment}
  ${FoldableComponent.fragment}
`
