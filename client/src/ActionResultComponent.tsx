/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ActionResultLabel } from './ActionResultLabel'
import { CommandOutputComponent } from './CommandOutputComponent'
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
      <div
        css={css`
          display: inline-block;
          padding: 8px;
          width: 100%;
          border: solid 1px #b2b2b2;
        `}
      >
        {fragment.results ? (
          fragment.results.map((resultCommand) =>
            resultCommand ? (
              <CommandOutputComponent fragment={resultCommand} />
            ) : (
              <></>
            )
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

ActionResultComponent.fragment = gql`
  fragment ActionResultComponent on Action {
    results {
      ...CommandOutputComponent
    }
  }
  ${CommandOutputComponent.fragment}
`
