/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { ActionStackComponentFragment } from '../generated/graphql'
import { CommandComponent } from '../command/CommandComponent'

interface ActionStackComponentProps {
  fragment: ActionStackComponentFragment
}

export const ActionStackComponent = ({
  fragment,
}: ActionStackComponentProps): JSX.Element => (
  <div
    css={css`
      display: inline-block;
      padding: 8px;
      width: 100%;
      border-left: solid 1px #eecf33;
      border-right: solid 1px #eecf33;
      border-bottom: solid 1px #eecf33;
    `}
  >
    {fragment.details
      ? fragment.details.map((command, index) =>
          command ? <CommandComponent key={index} fragment={command} /> : <></>
        )
      : ''}
  </div>
)

ActionStackComponent.fragment = gql`
  fragment ActionStackComponent on Action {
    details {
      ...CommandComponent
    }
  }

  ${CommandComponent.fragment}
`
