/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ActionInstructionComponentFragment } from '../generated/graphql'
import { ActionLabel } from './ActionLabel'
import { ParagraphComponent } from '../paragraph/ParagraphComponent'

interface ActionInstructionComponentProps {
  fragment: ActionInstructionComponentFragment
}

export const ActionInstructionComponent = ({
  fragment,
}: ActionInstructionComponentProps): JSX.Element => {
  if (
    //if instruction is empty
    !fragment.instruction ||
    !fragment.instruction.chunks ||
    //if instruction is array of empty chunks
    fragment.instruction.chunks
      .map((chunk) => (chunk && chunk.text ? chunk.text.length : 0))
      .reduce((agg, curr) => agg + curr) === 0
  ) {
    return (
      <div>
        <ActionLabel />
        <div
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
