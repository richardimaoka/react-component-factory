/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CommandOutputComponentFragment } from './generated/graphql'

interface CommandOutputComponentProps {
  fragment: CommandOutputComponentFragment
}

export const CommandOutputComponent = ({
  fragment,
}: CommandOutputComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        position: relative;
        padding: 8px 8px;
        background-color: #2d2d2d;
        color: #ffffff;
      `}
    >
      <pre
        css={css`
          margin: 0px;
        `}
      >
        <code>{fragment.text}</code>
      </pre>
    </div>
  )
}

CommandOutputComponent.fragment = gql`
  fragment CommandOutputComponent on CommandOutput {
    text
  }
`
