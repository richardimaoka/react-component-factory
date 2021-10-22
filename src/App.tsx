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

const Video = () => (
  <div
    css={css`
      padding: 4px;
      display: flex;
      justify-content: center;
      max-width: 768px;
    `}
  >
    <div>
      <iframe
        src="https://player.vimeo.com/video/237527670?h=5c82f4424c&title=0&byline=0&portrait=0"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://vimeo.com/237527670">What is Cypress?</a> from{' '}
        <a href="https://vimeo.com/user72267166">Cypress.io</a> on{' '}
        <a href="https://vimeo.com">Vimeo</a>
      </p>
    </div>
  </div>
)

const PageElements = () => (
  <div>
    <PageTitle title="概要:cypressはフロントエンドend-to-endテストの代表格、WSLで動かしてみよう！" />
    <Paragraph />
    <Video />
  </div>
)

const NextPageButton = () => (
  <div
    css={css`
      width: 60px;
      height: 60px;
      background-color: rgb(29, 161, 242);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      height="40px"
      width="40px"
      css={css`
        fill: white;
      `}
    >
      <path d="M15.06,39.36a4.8,4.8,0,0,1-3.48-8.11L22.31,20,11.59,8.76a4.8,4.8,0,1,1,6.93-6.64L32.41,16.64a4.8,4.8,0,0,1,0,6.62L18.54,37.87A4.8,4.8,0,0,1,15.06,39.36Z" />
    </svg>
  </div>
)

const NextPageBar = () => (
  <div
    css={css`
      width: 60px;
      margin-left: 10px;
    `}
  >
    <div
      css={css`
        position: fixed;
        top: 50%;
      `}
    >
      <NextPageButton />
    </div>
  </div>
)

const PrevPageButton = () => (
  <div
    css={css`
      width: 60px;
      height: 60px;
      background-color: rgb(29, 161, 242);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      height="40px"
      width="40px"
      css={css`
        fill: white;
      `}
    >
      <path d="M24.94.64a4.8,4.8,0,0,1,3.48,8.11L17.69,20,28.41,31.24a4.8,4.8,0,1,1-6.93,6.64L7.59,23.36a4.8,4.8,0,0,1,0-6.62L21.46,2.13A4.8,4.8,0,0,1,24.94.64Z" />
    </svg>
  </div>
)

const PrevPageBar = () => (
  <div
    css={css`
      width: 60px;
      margin-right: 10px;
    `}
  >
    <div
      css={css`
        position: fixed;
        top: 50%;
      `}
    >
      <PrevPageButton />
    </div>
  </div>
)

const LessonContent = () => {
  const pages = [
    { page: 1 },
    { page: 2 },
    { page: 3 },
    { page: 4 },
    { page: 5 },
    { page: 6 },
  ]

  return (
    <div
      css={css`
        max-width: 768px;
        min-height: calc(100vh - 10px);
        border: solid 1px;
      `}
    >
      <ProgressBar currentPage={3} pages={pages} />
      <PageElements />
    </div>
  )
}

const MainContainer = () => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <PrevPageBar />
        <LessonContent />
        <NextPageBar />
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
