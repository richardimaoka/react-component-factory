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

const Paragraph = () => (
  <p
    css={css`
      padding: 4px;
    `}
  >
    Cypressはフロントエンドのend-to-endテストフレームワークの代表格です。ローカル開発環境で
    npx cypress open
    コマンドを実行すれば、Cypressはブラウザを自動で立ち上げて、高速で次々にテストを完了していきます。その軽快な動作は非常に心地よく、フロントエンドのテスト駆動開発を推進するのにピッタリなツールです。CIサーバー上ではブラウザを立ち上げることなくheadlessモードで動作します。
  </p>
)

const PageElements = () => (
  <div>
    <PageTitle title="概要:cypressはフロントエンドend-to-endテストの代表格、WSLで動かしてみよう！" />
    <Paragraph />
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
