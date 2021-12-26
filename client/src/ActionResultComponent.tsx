/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { ActionResultLabel } from './ActionResultLabel'
import { ActionResultComponentFragment } from './generated/graphql'

interface ActionResultComponentProps {
  fragment: ActionResultComponentFragment
}

export const ActionResultComponent = ({
  fragment,
}: ActionResultComponentProps): JSX.Element => {
  return (
    <div>
      <ActionResultLabel />
    </div>
  )
}

ActionResultComponent.fragment = gql`
  fragment ActionResultComponent on Action {
    results {
      text
    }
  }
`
