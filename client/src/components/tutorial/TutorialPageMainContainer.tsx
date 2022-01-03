/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const TutorialPageMainContainer = (): JSX.Element => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div
          css={css`
            width: 752px;
            padding: 8px;
          `}
        ></div>
      </div>
    </main>
  )
}
