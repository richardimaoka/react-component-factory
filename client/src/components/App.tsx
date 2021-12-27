/** @jsxImportSource @emotion/react */

import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from '@apollo/client'
import { css } from '@emotion/react'
import { useMainQuery } from '../lib/generated/graphql'
import { CarouselComponent } from './carousel/CarouselComponent'

gql`
  query Main {
    carousel {
      ...CarouselComponent
    }
  }
  ${CarouselComponent.fragment}
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
    return data.carousel ? (
      <main>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <div
            css={css`
              width: 752px;
              padding: 8px;
            `}
          >
            <CarouselComponent fragment={data.carousel} />
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
