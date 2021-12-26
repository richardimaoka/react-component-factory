/** @jsxImportSource @emotion/react */
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { css } from '@emotion/react'
import {
  ActionStatementComponentFragment,
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
  fragment: ActionStatementComponentFragment
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
    {fragment.paragraph?.chunks}
  </div>
)

ActionStatementComponent.fragment = gql`
  fragment actionStatementComponent on Action {
    paragraph {
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
      paragraph {
        chunks {
          text
        }
      }
    }
  }
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
    data.action
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
              <ActionStackComponent />
            </div>
          </div>
        </div>
      </main>
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
