/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ActionStackComponentFragment } from '../../lib/generated/graphql'
import { CommandComponent } from '../command/CommandComponent'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'
import {
  isEmptyPlainElement,
  PlainElementComponent,
} from '../PlainElementComponent'

interface ActionStackComponentProps {
  fragment: ActionStackComponentFragment
}

export const isEmptyActionDetails = (
  fragment: ActionStackComponentFragment
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
}: ActionStackComponentProps): JSX.Element => {
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
  fragment ActionStackComponent on Action {
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
