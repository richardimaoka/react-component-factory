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

interface PageTitleProps {
  title: string
}

const PageTitle = ({ title }: PageTitleProps) => (
  <div
    css={css`
      padding: 4px;
    `}
  >
    <h2
      css={css`
        margin-top: 0px;
        margin-bottom: 0px;
        color: #0a0a0a;
      `}
    >
      {title}
    </h2>
  </div>
)

const PageElements = () => (
  <div>
    <PageTitle title="概要:cypressはフロントエンドend-to-endテストの代表格、WSLで動かしてみよう！" />
  </div>
)

const MainContainer = () => {
  const pages = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
    { page: 6 },
  ]

  return (
    <main>
      <div
        css={css`
          margin-left: auto;
          margin-right: auto;
          max-width: 768px;
          border: solid 1px;
        `}
      >
        <ProgressBar currentPage={3} pages={pages} />
        <PageElements />
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
