/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const ActionResultLabel = (): JSX.Element => {
  return (
    <div>
      <div
        css={css`
          display: inline-block;
          padding: 4px 8px;
          background-color: #b2b2b2;
        `}
      >
        Action Result
      </div>
    </div>
  )
}
