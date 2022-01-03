/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import {
  PageElementComponentFragment,
  TutorialPageMainContainerFragment,
} from '../../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../../switchExhaustivenessCheck'
import { ActionComponent } from '../action/ActionComponent'
import { CarouselComponent } from '../carousel/CarouselComponent'
import { CommandComponent } from '../command/CommandComponent'
import { CommandOutputComponent } from '../command/CommandOutputComponent'
import { FoldableComponent } from '../foldable/FoldableComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import { VideoComponent } from '../video/VideoComponent'

interface PageElementComponentProps {
  fragment: PageElementComponentFragment
}

export const PageElementComponent = ({
  fragment,
}: PageElementComponentProps): JSX.Element => {
  if (!fragment.__typename) {
    return <></>
  } else {
    const typename = fragment.__typename
    switch (typename) {
      case 'Paragraph':
        return <ParagraphComponent fragment={fragment} />
      case 'Command':
        return <CommandComponent fragment={fragment} />
      case 'CommandOutput':
        return <CommandOutputComponent fragment={fragment} />
      case 'Video':
        return <VideoComponent fragment={fragment} />
      case 'CarouselImage':
        return <CarouselComponent fragment={fragment} />
      case 'Action':
        return <ActionComponent fragment={fragment} />
      case 'Foldable':
        return <FoldableComponent fragment={fragment} />
      default:
        return switchExhaustivenessCheck(typename)
    }
  }
}

PageElementComponent.fragment = gql`
  fragment PageElementComponent on PageElement {
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
    ... on Foldable {
      ...FoldableComponent
    }
  }

  ${ParagraphComponent.fragment}
  ${CommandComponent.fragment}
  ${CommandOutputComponent.fragment}
  ${VideoComponent.fragment}
  ${CarouselComponent.fragment}
  ${ActionComponent.fragment}
  ${FoldableComponent.fragment}
`

interface InnerComponentProps {
  fragment: TutorialPageMainContainerFragment
}

export const InnerComponent = ({
  fragment,
}: InnerComponentProps): JSX.Element => {
  if (!fragment.pageElements || fragment.pageElements.length === 0) {
    return <></>
  } else {
    return (
      <div>
        {fragment.pageElements.map((element) =>
          element ? <PageElementComponent fragment={element} /> : <></>
        )}
      </div>
    )
  }
}

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
        >
          <InnerComponent fragment={fragment} />
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
  ${FoldableComponent.fragment}
`
