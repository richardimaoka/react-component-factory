/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { PlainElementComponentFragment } from '../../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../../switchExhaustivenessCheck'
import {
  CarouselComponent,
  isEmptyCarouselComponent,
} from '../carousel/CarouselComponent'
import { CommandComponent, isEmptyCommand } from '../command/CommandComponent'
import {
  CommandOutputComponent,
  isEmptyCommandOutput,
} from '../command/CommandOutputComponent'
import {
  isEmptyParagraph,
  ParagraphComponent,
} from '../paragraph/ParagraphComponent'
import { isEmptyVideo, VideoComponent } from '../video/VideoComponent'

interface PlainElementComponentProps {
  fragment: PlainElementComponentFragment
}

export const isEmptyPlainElement = (
  fragment: PlainElementComponentFragment | null | undefined
): boolean => {
  if (!fragment || !fragment.__typename) {
    return false
  } else {
    const typename = fragment.__typename
    switch (typename) {
      case 'Command':
        return isEmptyCommand(fragment)
      case 'CommandOutput':
        return isEmptyCommandOutput(fragment)
      case 'Paragraph':
        return isEmptyParagraph(fragment)
      case 'Video':
        return isEmptyVideo(fragment)
      case 'CarouselImage':
        return isEmptyCarouselComponent(fragment)
      default:
        return switchExhaustivenessCheck(typename)
    }
  }
}

export const PlainElementComponent = ({
  fragment,
}: PlainElementComponentProps): JSX.Element => {
  if (!fragment.__typename || isEmptyPlainElement(fragment)) {
    return <></>
  } else {
    const typename = fragment.__typename
    switch (typename) {
      case 'Command':
        return <CommandComponent fragment={fragment} />
      case 'CommandOutput':
        return <CommandOutputComponent fragment={fragment} />
      case 'Paragraph':
        return <ParagraphComponent fragment={fragment} />
      case 'Video':
        return <VideoComponent fragment={fragment} />
      case 'CarouselImage':
        return <CarouselComponent fragment={fragment} />
      default:
        return switchExhaustivenessCheck(typename)
    }
  }
}

PlainElementComponent.fragment = gql`
  fragment PlainElementComponent on PlainElement {
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
