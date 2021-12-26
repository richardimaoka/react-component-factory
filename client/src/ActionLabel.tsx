/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const ActionLabel = (): JSX.Element => {
  return (
    <div>
      <div
        css={css`
          display: inline-block;
          padding: 4px 8px;
          background-color: #eecf33;
        `}
      >
        Action
      </div>
    </div>
  )
}
