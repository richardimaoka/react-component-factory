/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import {
  ActionInstructionComponentFragment,
  ActionInstructionComponentFragmentDoc,
} from '../generated/graphql'
import { ActionLabel } from './ActionLabel'
import {
  ParagraphComponent,
  isEmptyParagraph,
} from '../paragraph/ParagraphComponent'

interface ActionInstructionComponentProps {
  fragment: ActionInstructionComponentFragment
}

export const isEmptyActionInstruction = (
  fragment: ActionInstructionComponentFragment
): boolean => {
  return !fragment.instruction || isEmptyParagraph(fragment.instruction)
}

export const ActionInstructionComponent = ({
  fragment,
}: ActionInstructionComponentProps): JSX.Element => {
  if (isEmptyActionInstruction(fragment)) {
    return (
      <div>
        <ActionLabel />
        <div
          // Just the bottom line adjacent to the next (below) component
          css={css`
            border-bottom: solid 1px #eecf33;
          `}
        />
      </div>
    )
  } else {
    return (
      <div>
        <ActionLabel />
        <div
          css={css`
            padding: 8px;
            border: solid 1px #eecf33;
          `}
        >
          {fragment.instruction ? (
            <ParagraphComponent fragment={fragment.instruction} />
          ) : (
            <></>
          )}
        </div>
      </div>
    )
  }
}

ActionInstructionComponent.fragment = gql`
  fragment ActionInstructionComponent on Action {
    instruction {
      ...ParagraphComponent
    }
  }

  ${ParagraphComponent.fragment}
`
