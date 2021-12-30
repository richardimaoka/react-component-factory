/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useState } from 'react'
import { FoldableComponentFragment } from '../../lib/generated/graphql'
import { CarouselComponent } from '../carousel/CarouselComponent'
import { CommandComponent } from '../command/CommandComponent'
import { CommandOutputComponent } from '../command/CommandOutputComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import { VideoComponent } from '../video/VideoComponent'
import { FoldedIcon } from './FoldedIcon'
import { UnfoldedIcon } from './UnfoldedIcon'

interface FoldableDescriptionBarProps {
  folded: boolean
  shortDescription: string
  transitionToFold: () => void
  transitionToUnfold: () => void
}

const FoldableDescriptionBar = ({
  folded,
  shortDescription,
  transitionToFold,
  transitionToUnfold,
}: FoldableDescriptionBarProps): JSX.Element => {
  if (folded) {
    return (
      <div
        css={css`
          background-color: #aed5f3;
          display: flex;
        `}
        onClick={transitionToUnfold}
      >
        <FoldedIcon />
        {shortDescription}
      </div>
    )
  } else {
    return (
      <div
        css={css`
          background-color: #aed5f3;
          display: flex;
        `}
        onClick={transitionToFold}
      >
        <UnfoldedIcon />
        {shortDescription}
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
    }
  }

  ${ParagraphComponent.fragment}
  ${CommandComponent.fragment}
  ${CommandOutputComponent.fragment}
  ${VideoComponent.fragment}
  ${CarouselComponent.fragment}
`
