/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { ActionInstructionComponent } from './ActionInstructionComponent'
import { ActionStackComponent } from './ActionStackComponent'
import { ActionComponentFragment } from './generated/graphql'
import { ActionResultComponent } from './ActionResultComponent'

interface ActionComponentProps {
  fragment: ActionComponentFragment
}

export const ActionComponent = ({
  fragment,
}: ActionComponentProps): JSX.Element => {
  return (
    <div>
      <ActionInstructionComponent fragment={fragment} />
      <ActionStackComponent fragment={fragment} />
      <ActionResultComponent fragment={fragment} />
    </div>
  )
}

ActionComponent.fragment = gql`
  fragment ActionComponent on Action {
    ...ActionInstructionComponent
    ...ActionStackComponent
    ...ActionResultComponent
  }

  ${ActionInstructionComponent.fragment}
  ${ActionResultComponent.fragment}
`
