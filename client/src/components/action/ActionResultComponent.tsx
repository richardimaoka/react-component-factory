/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ActionResultComponentFragment } from '../../lib/generated/graphql'
import { CarouselComponent } from '../carousel/CarouselComponent'
import { CommandComponent } from '../command/CommandComponent'
import { CommandOutputComponent } from '../command/CommandOutputComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import {
  isEmptyPlainElement,
  PlainElementComponent,
} from '../elements/PlainElementComponent'
import { VideoComponent } from '../video/VideoComponent'

interface ActionResultComponentProps {
  fragment: ActionResultComponentFragment
}

export const isEmptyActionResults = (
  fragment: ActionResultComponentFragment
): boolean => {
  if (!fragment.results) {
    return true
  } else {
    const isAnyElementContentful = fragment.results
      .map(isEmptyPlainElement)
      .includes(false) //see if any `isEmptyTextChunk == false`

    const isEveryElementEmpty = !isAnyElementContentful

    return isEveryElementEmpty
  }
}

export const ActionResultComponent = ({
  fragment,
}: ActionResultComponentProps): JSX.Element => {
  if (!fragment.results || isEmptyActionResults(fragment)) {
    return <></>
  } else {
    return (
      <div
        css={css`
          padding: 8px;
          border-left: solid 1px #eecf33;
          border-right: solid 1px #eecf33;
          border-bottom: solid 1px #eecf33;
        `}
      >
        {fragment.results.map((element, index) =>
          element ? (
            <PlainElementComponent key={index} fragment={element} />
          ) : (
            <></>
          )
        )}
      </div>
    )
  }
}

ActionResultComponent.fragment = gql`
  fragment ActionResultComponent on Action {
    results {
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
