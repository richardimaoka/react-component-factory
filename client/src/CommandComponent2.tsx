/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CommandComponent2Fragment } from './generated/graphql'

interface CommandComponent2Props {
  fragment: CommandComponent2Fragment
}

export const CommandComponent2 = ({
  fragment,
}: CommandComponent2Props): JSX.Element => {
  return (
    <div
      css={css`
        padding: 4px 8px;
        background-color: #2d2d2d;
        color: #ffffff;
      `}
    >
      <pre>
        <code>{fragment.text}</code>
      </pre>
    </div>
  )
}

CommandComponent2.fragment = gql`
  fragment CommandComponent2 on Command {
    text
  }
`
