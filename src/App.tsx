/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const HeaderIcon = () => (
  <div
    css={css`
      padding-right: 10px;
    `}
  >
    <div
      css={css`
        background-color: #77c4ff;
        width: 30px;
        height: 30px;
      `}
    ></div>
  </div>
)

const HeaderTitle = ({ title }: { title: string }) => (
  <h1
    css={css`
      margin: 0px;
      font-size: 1.5em;
    `}
  >
    {title}
  </h1>
)

const HeaderContainer = ({ title }: { title: string }) => (
  <header>
    <div
      css={css`
        display: flex;
        padding: 8px;
        border-bottom: solid 1px #707070;
      `}
    >
      <HeaderIcon />
      <HeaderTitle title={title} />
    </div>
  </header>
)

const App = (): JSX.Element => (
  <HeaderContainer title="CypressをWSL2上で動かすために必要な作業" />
)

export default App
