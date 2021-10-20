/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const ProgressBar = () => (
  <div
    css={css`
      display: flex;

      div:first-child {
        margin-left: 0px;
      }

      div:last-child {
        margin-right: 0px;
      }

      div:nth-child(2) {
        background-color: #3edf33;
      }
    `}
  >
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
      <div
        key={num}
        css={css`
          flex-grow: 1;
          background-color: #dfdfdf;
          margin-left: 5px;
          margin-right: 5px;
        `}
      >
        {num}
      </div>
    ))}
  </div>
)

const MainContainer = () => (
  <main>
    <div
      css={css`
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        border: solid 1px;
      `}
    >
      <ProgressBar />
    </div>
  </main>
)

const App = (): JSX.Element => <MainContainer />

export default App
