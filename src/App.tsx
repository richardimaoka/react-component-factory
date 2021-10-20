/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface Page {
  page: number
}
interface ProgressBarProps {
  currentPage: number
  pages: Page[]
}

const ProgressBar = ({ currentPage, pages }: ProgressBarProps) => (
  <div
    css={css`
      display: flex;

      div:first-of-type {
        margin-left: 0px;
      }

      div:last-of-type {
        margin-right: 0px;
      }

      div:nth-of-type(${currentPage}) {
        background-color: #3edf33;
      }
    `}
  >
    {pages.map((page) => (
      <div
        key={page.page}
        css={css`
          flex-grow: 1;
          height: 20px;
          background-color: #dfdfdf;
          margin-left: 5px;
          margin-right: 5px;
        `}
      ></div>
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
      <ProgressBar
        currentPage={3}
        pages={[
          { page: 1 },
          { page: 2 },
          { page: 3 },
          { page: 4 },
          { page: 5 },
          { page: 6 },
        ]}
      />
    </div>
  </main>
)

const App = (): JSX.Element => <MainContainer />

export default App
