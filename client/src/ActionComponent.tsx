/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { ActionInstructionComponent } from './ActionInstructionComponent'
import { ActionLabelComponent } from './ActionLabelComponent'
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
      <ActionLabelComponent />
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
