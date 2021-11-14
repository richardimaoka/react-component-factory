/** @jsxImportSource @emotion/react */
import { ApolloProvider } from '@apollo/client'
import { css } from '@emotion/react'

export const MainContainer = (): JSX.Element => {
  return (
    <main>
      <div
        css={css`
          width: 750px;
        `}
      ></div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
