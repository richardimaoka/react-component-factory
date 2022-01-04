/** @jsxImportSource @emotion/react */
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { css } from '@emotion/react'
import { useMainQuery } from '../lib/generated/graphql'
import { TutorialPage } from './tutorial/TutorialPage'

gql`
  query Main {
    tutorial {
      ...TutorialPage
    }
  }

  ${TutorialPage.fragment}
`

export const MainContainer = (): JSX.Element => {
  const { loading, error, data } = useMainQuery()

  if (loading) {
    console.log('Loading...')
    return <div>{'Loading...'}</div>
  } else if (error) {
    console.log(`GraphQL Error! ${error.message}`)
    return <div>{`GraphQL Error! ${error.message}`}</div>
  } else if (!data) {
    console.log('GraphQL Error! returned data is undefined or null')
    return <div>{`GraphQL Error! returned data is undefined or null`}</div>
  } else {
    console.log('rendering')
    return data.tutorial ? (
      <>
        <TutorialPage fragment={data.tutorial} pageNum={'1'} />
      </>
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
