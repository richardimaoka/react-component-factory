/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useState } from 'react'
import { FoldableComponentFragment } from '../../lib/generated/graphql'
import { CarouselComponent } from '../carousel/CarouselComponent'
import { CommandComponent } from '../command/CommandComponent'
import { CommandOutputComponent } from '../command/CommandOutputComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import {
  isEmptyPlainElement,
  PlainElementComponent,
} from '../elements/PlainElementComponent'
import { VideoComponent } from '../video/VideoComponent'
import { FoldableDescriptionBar } from './FoldableDescriptionBar'
import { SubtitleComponent } from '../subtitle/SubtitleComponent'

export const isEmptyFoldable = (
  fragment: FoldableComponentFragment
): boolean => {
  if (!fragment.elements) {
    return true
  } else {
    const isAnyElementContentful = fragment.elements
      .map(isEmptyPlainElement)
      .includes(false) //see if any `isEmptyTextChunk == false`

    const isEveryElementEmpty = !isAnyElementContentful

    return isEveryElementEmpty
  }
}

interface InnerComponentProps {
  fragment: FoldableComponentFragment
  folded: boolean
}

const InnerComponent = ({
  fragment,
  folded,
}: InnerComponentProps): JSX.Element => {
  if (!fragment.elements || isEmptyFoldable(fragment)) {
    return <></>
  } else if (folded) {
    return <></>
  } else {
    return (
      <div
        css={css`
          padding: 8px;
          border: solid 1px #aed5f3;

          > div {
            margin-bottom: 20px;
          }

          > div:last-child {
            margin-bottom: 0px;
          }
        `}
      >
        {fragment.elements.map((element, index) =>
          element ? (
            <div>
              <PlainElementComponent key={index} fragment={element} />
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    )
  }
}

interface FoldableComponentProps {
  fragment: FoldableComponentFragment
}

export const FoldableComponent = ({
  fragment,
}: FoldableComponentProps): JSX.Element => {
  const [folded, setFolded] = useState(true)
  const transitionToUnfold = () => {
    setFolded(false)
  }
  const transitionToFold = () => {
    setFolded(true)
  }

  return (
    <div>
      <FoldableDescriptionBar
        shortDescription={fragment.shortDescription}
        folded={folded}
        transitionToFold={transitionToFold}
        transitionToUnfold={transitionToUnfold}
      />
      <InnerComponent fragment={fragment} folded={folded} />
    </div>
  )
}

FoldableComponent.fragment = gql`
  fragment FoldableComponent on Foldable {
    shortDescription
    elements {
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
      ... on Subtitle {
        ...SubtitleComponent
      }
    }
  }

  ${ParagraphComponent.fragment}
  ${CommandComponent.fragment}
  ${CommandOutputComponent.fragment}
  ${VideoComponent.fragment}
  ${CarouselComponent.fragment}
  ${SubtitleComponent.fragment}
`
