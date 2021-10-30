/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import Prism from 'prismjs'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  makeVar,
} from '@apollo/client'

const typeDefs = gql`
  type Query {
    fileSet: FileSet
  }

  type File {
    filename: String
    filecontent: String
  }

  type FileSet {
    files: [File]
    selectFileIndex: Int
  }
`

const GET_FILESET = gql`
  query {
    fileSet {
      files {
        filename
        filecontent
      }
      selectFileIndex
    }
  }
`

const selectIndex = makeVar(0)

const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          fileSet: {
            read() {
              console.log("typePolicies - fileSet's read is called")
              return {
                files: [],
                selectFileIndex: selectIndex(),
              }
            },
          },
        },
      },
    },
  }),
  typeDefs,
})

const fileContentMainJs = `import { createStore } from 'redux'
/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}`

const fileContentPackageJson = `{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.5.0",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/node": "^12.0.0",
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "prismjs": "^1.25.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/prismjs": "^1.16.6",
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "eslint": "^7.32.0",
    "stylelint": "^13.13.1",
    "stylelint-config-standard": "^22.0.0",
    "typescript": "^4.4.4"
  }
}
`

export const MainContainer = (): JSX.Element => {
  const { /*loading,*/ error, data } = useQuery(GET_FILESET)

  // if (loading) {
  //   return <div>{'Loading...'}</div>
  // } else
  if (error) {
    return <div>{`Error! ${error.message}`}</div>
  } else {
    console.log(data)
    return (
      <main>
        <div
          css={css`
            width: 768px;
          `}
        ></div>
      </main>
    )
  }
}

const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <MainContainer />
  </ApolloProvider>
)

export default App
