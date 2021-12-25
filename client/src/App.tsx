/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import React from 'react'

const query = gql`
  query gettt {
    tutorial {
      __typename
    }
  }
`

export const MainContainer = (): JSX.Element => {
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
            width: 768px;
          `}
        ></div>
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
