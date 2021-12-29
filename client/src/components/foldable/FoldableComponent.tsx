/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { CarouselComponent } from '../carousel/CarouselComponent'
import { CommandComponent } from '../command/CommandComponent'
import { CommandOutputComponent } from '../command/CommandOutputComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import { VideoComponent } from '../video/VideoComponent'

interface FoldableComponentProps {
  fragment: string
}

export const FoldableComponent = ({
  fragment,
}: FoldableComponentProps): JSX.Element => {
  return <></>
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

  ${ParagraphComponent.fragment}
  ${CommandComponent.fragment}
  ${CommandOutputComponent.fragment}
  ${VideoComponent.fragment}
  ${CarouselComponent.fragment}
`
