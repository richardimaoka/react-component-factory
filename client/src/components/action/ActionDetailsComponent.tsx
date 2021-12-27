/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ActionDetailsComponentFragment } from '../../lib/generated/graphql'
import { CommandComponent } from '../command/CommandComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import {
  isEmptyPlainElement,
  PlainElementComponent,
} from '../PlainElementComponent'

interface ActionDetailsComponentProps {
  fragment: ActionDetailsComponentFragment
}

export const isEmptyActionDetails = (
  fragment: ActionDetailsComponentFragment
): boolean => {
  if (!fragment.details) {
    return true
  } else {
    const isAnyElementContentful = fragment.details
      .map(isEmptyPlainElement)
      .includes(false) //see if any `isEmptyTextChunk == false`

    const isEveryChunkEmpty = !isAnyElementContentful

    return isEveryChunkEmpty
  }
}
export const ActionDetailsComponent = ({
  fragment,
}: ActionDetailsComponentProps): JSX.Element => {
  console.log(fragment)

  if (!fragment.details || isEmptyActionDetails(fragment)) {
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
        {fragment.details.map((command, index) =>
          command ? (
            <PlainElementComponent key={index} fragment={command} />
          ) : (
            <></>
          )
        )}
      </div>
    )
  }
}

ActionDetailsComponent.fragment = gql`
  fragment ActionDetailsComponent on Action {
    details {
      ... on Paragraph {
        ...ParagraphComponent
      }
      ... on Command {
        ...CommandComponent
      }
    }
  }

  ${ParagraphComponent.fragment}
  ${CommandComponent.fragment}
`
