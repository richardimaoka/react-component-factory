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
export const ActionLabelComponent = (): JSX.Element => {
  return (
    <div>
      <div
        css={css`
          display: inline-block;
          padding: 4px 8px;
          background-color: #eecf33;
        `}
      >
        Action
      </div>
    </div>
  )
}

export const ActionStatementComponent = ({
  statement,
}: {
  statement: string
}) => (
  <div
    css={css`
      display: inline-block;
      padding: 8px;
      width: 100%;
      border: solid 1px #eecf33;
    `}
  >
    {statement}
  </div>
)

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
        >
          <div>
            <ActionLabelComponent />
            <ActionStatementComponent
              statement={'以下のコマンドを実行してください。'}
            />
          </div>
        </div>
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
