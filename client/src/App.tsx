/** @jsxImportSource @emotion/react */
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { css } from '@emotion/react'
import {
  ActionComponentFragment,
  ActionStatementComonentFragment,
  Paragraph,
  useMainQuery,
} from './generated/graphql'

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

interface ActionStatementComponentProps {
  fragment: ActionStatementComonentFragment
}

export const ActionStatementComponent = ({
  fragment,
}: ActionStatementComponentProps): JSX.Element => (
  <div
    css={css`
      display: inline-block;
      padding: 8px;
      width: 100%;
      border: solid 1px #eecf33;
    `}
  >
    {fragment.chunks}
  </div>
)

ActionStatementComponent.fragment = gql`
  fragment ActionStatementComonent on Paragraph {
    chunks {
      text
    }
  }
`

interface ActionComponentProps {
  fragment: ActionComponentFragment
}

export const ActionComponent = ({
  fragment,
}: ActionComponentProps): JSX.Element => {
  return (
    <div>
      {fragment.instruction ? (
        <ActionStatementComponent fragment={fragment.instruction} />
      ) : (
        <></>
      )}
      <ActionLabelComponent />
      <ActionStackComponent />
    </div>
  )
}

ActionComponent.fragment = gql`
  fragment ActionComponent on Action {
    instruction {
      chunks {
        text
      }
    }
  }
`

export const ActionStackComponent = (): JSX.Element => (
  <div
    css={css`
      display: inline-block;
      padding: 8px;
      width: 100%;
      border-left: solid 1px #eecf33;
      border-right: solid 1px #eecf33;
      border-bottom: solid 1px #eecf33;
    `}
  >
    a
  </div>
)

gql`
  query Main {
    action {
      ...ActionComponent
    }
  }
  ${ActionComponent.fragment}
`

export const MainContainer = (): JSX.Element => {
  const { loading, error, data } = useMainQuery()

  if (loading) {
    return <div>{'Loading...'}</div>
  } else if (error) {
    return <div>{`GraphQL Error! ${error.message}`}</div>
  } else if (!data) {
    return <div>{`GraphQL Error! returned data is undefined or null`}</div>
  } else {
    return data.action ? (
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
            <ActionComponent fragment={data.action} />
          </div>
        </div>
      </main>
    ) : (
      <></>
    )
  }
}

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <MainContainer />
  </ApolloProvider>
)

export default App
