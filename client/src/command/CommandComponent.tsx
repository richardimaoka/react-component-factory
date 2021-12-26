/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CommandComponentFragment } from '../generated/graphql'

interface CommandComponentProps {
  fragment: CommandComponentFragment
}

export const CommandComponent = ({
  fragment,
}: CommandComponentProps): JSX.Element => {
  if (!fragment.text || fragment.text.length === 0) {
    return <></>
  } else {
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
        <button
          css={css`
            position: absolute;
            right: 8px;
            top: 4px;
            background-color: #2d2d2d;
            border: solid 1px #888888;
            color: #ffffff;
          `}
        >
          copy
        </button>
      </div>
    )
  }
}

CommandComponent.fragment = gql`
  fragment CommandComponent on Command {
    text
  }
`
