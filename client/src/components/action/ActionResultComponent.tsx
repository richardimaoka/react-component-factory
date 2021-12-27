/** @jsxImportSource @emotion/react */

import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ActionResultLabel } from './ActionResultLabel'
import { CommandOutputComponent } from '../command/CommandOutputComponent'
import { ActionResultComponentFragment } from '../../lib/generated/graphql'

interface ActionResultComponentProps {
  fragment: ActionResultComponentFragment
}

export const isEmptyActionResult = (
  fragment: ActionResultComponentFragment
): boolean => {
  return !fragment.results // || fragment.results. ... further checks
}

export const ActionResultComponent = ({
  fragment,
}: ActionResultComponentProps): JSX.Element => {
  if (!fragment.results) {
    return <></>
  } else {
    return (
      <div
        css={css`
          margin-top: 10px;
        `}
      >
        <ActionResultLabel />
        <div
          css={css`
            padding: 8px;
            border: solid 1px #b2b2b2;
          `}
        >
          {fragment.results.map((resultCommand) =>
            resultCommand ? (
              <CommandOutputComponent fragment={resultCommand} />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    )
  }
}

ActionResultComponent.fragment = gql`
  fragment ActionResultComponent on Action {
    results {
      ...CommandOutputComponent
    }
  }
  ${CommandOutputComponent.fragment}
`
