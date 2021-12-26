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
}: ActionInstructionComponentProps): JSX.Element => (
  <div>
    <ActionLabel />
    <div
      css={css`
        display: inline-block;
        padding: 8px;
        width: 100%;
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

ActionInstructionComponent.fragment = gql`
  fragment ActionInstructionComponent on Action {
    instruction {
      ...ParagraphComponent
    }
  }

  ${ParagraphComponent.fragment}
`
