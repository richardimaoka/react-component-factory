/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const MainContainer = () => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
          width: 768px;
        `}
      >
        <div />
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
