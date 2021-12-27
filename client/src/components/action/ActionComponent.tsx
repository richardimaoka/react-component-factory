/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { ActionInstructionComponent } from './ActionInstructionComponent'
import { ActionDetailsComponent } from './ActionDetailsComponent'
import { ActionComponentFragment } from '../../lib/generated/graphql'
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
      <ActionDetailsComponent fragment={fragment} />
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
