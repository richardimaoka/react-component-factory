/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { ActionInstructionComponent } from './ActionInstructionComponent'
import { ActionLabel } from './ActionLabel'
import { ActionStackComponent } from './ActionStackComponent'
import { ActionComponentFragment } from './generated/graphql'

interface ActionComponentProps {
  fragment: ActionComponentFragment
}

export const ActionComponent = ({
  fragment,
}: ActionComponentProps): JSX.Element => {
  return (
    <div>
      <ActionLabel />
      {fragment.instruction ? (
        <ActionInstructionComponent fragment={fragment} />
      ) : (
        <></>
      )}
      <ActionStackComponent fragment={fragment} />
    </div>
  )
}

ActionComponent.fragment = gql`
  fragment ActionComponent on Action {
    ...ActionInstructionComponent
    ...ActionStackComponent
  }

  ${ActionInstructionComponent.fragment}
`
