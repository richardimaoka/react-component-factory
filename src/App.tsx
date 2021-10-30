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

interface FileTabProps {
  filename: string
  fileIndex: number
  selectedFileIndex: number
}

export const FileTab = ({
  filename,
  fileIndex,
  selectedFileIndex,
}: FileTabProps): JSX.Element => {
  const isThisFileSelected = fileIndex === selectedFileIndex
  if (isThisFileSelected) {
    console.log(`${filename} is selected`)
  }

  return (
    <div
      css={css`
        display: flex;
      `}
      onClick={() => {
        console.log(`clicked ${filename} (${fileIndex})`)
        console.log(`before ${selectIndex()}`)
        selectIndex(fileIndex)
        console.log(`AFTER ${selectIndex()}`)
      }}
    >
      <div
        css={css`
          border-top-right-radius: 8px;
          border-bottom: solid ${isThisFileSelected ? 2 : 0}px #2d2d2d;
          padding-top: 4px;
          padding-bottom: 6px;
          padding-right: 8px;
          padding-left: 8px;
          background-color: #2d2d2d;
          color: #ccc;
        `}
      >
        {filename}
      </div>
    </div>
  )
}

interface FileNameTabBarProps {
  files: File[]
  selectFileIndex: number
}

export const FileNameTabBar = ({
  files,
  selectFileIndex,
}: FileNameTabBarProps): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
      `}
    >
      {files.map((file, index) => (
        <FileTab
          key={index}
          filename={files[index].filename}
          fileIndex={index}
          selectedFileIndex={selectFileIndex}
        />
      ))}
    </div>
  )
}

interface FileContentProps {
  filecontent: string
}

export const FileContent = ({ filecontent }: FileContentProps): JSX.Element => {
  const codeElement = useRef<HTMLElement>(null)
  useEffect(() => {
    if (codeElement.current) {
      Prism.highlightElement(codeElement.current)
    }
  })

  return (
    <div
      css={css`
        padding: 8px;
        background-color: #2d2d2d;
      `}
    >
      <pre>
        <code ref={codeElement} className={'lang-js'}>
          {filecontent}
        </code>
      </pre>
    </div>
  )
}

interface File {
  filename: string
  filecontent: string
}
interface FileViewerProps {
  files: File[]
  selectFileIndex: number
}

export const FileViewer = ({
  files,
  selectFileIndex,
}: FileViewerProps): JSX.Element => {
  return (
    <div>
      <FileNameTabBar files={files} selectFileIndex={selectFileIndex} />
      <FileContent filecontent={files[selectFileIndex].filecontent} />
    </div>
  )
}

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

export const FileIcon = (): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        css={css`
          fill: rgb(83, 100, 113);
        `}
        viewBox="0 0 40 40"
      >
        <g>
          <rect x="-6" y="-64" width="50" height="108" />
        </g>
        <g>
          <g>
            <path
              id="rect1662"
              d="M9.43,1.5a4,4,0,0,0-4,4V34.54a4,4,0,0,0,4,4H30.57a4,4,0,0,0,4-4V9.43a1.33,1.33,0,0,0-.39-.94l-6.61-6.6a1.31,1.31,0,0,0-.93-.39Zm0,2.64H24v4a4,4,0,0,0,4,4h4V34.54a1.29,1.29,0,0,1-1.32,1.32H9.43a1.29,1.29,0,0,1-1.32-1.32V5.46A1.29,1.29,0,0,1,9.43,4.14Zm17.18.55,4.74,4.74H27.93a1.29,1.29,0,0,1-1.32-1.32Z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export const DirectoryIcon = (): JSX.Element => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        css={css`
          fill: rgb(83, 100, 113);
        `}
        viewBox="0 0 40 40"
      >
        <g>
          <rect x="-6" y="-4" width="50" height="108" />
        </g>
        <g>
          <g>
            <path d="M5.25,3.91a4,4,0,0,0-4,4V32.07a4,4,0,0,0,4,4h29.5a4,4,0,0,0,4-4V13.29a4,4,0,0,0-4-4H20.65L17.72,5.56a4,4,0,0,0-3.08-1.65Zm0,2.68h9.39c.29,0,.61.18,1,.64L19,11.44A1.31,1.31,0,0,0,20,12H34.75a1.32,1.32,0,0,1,1.34,1.34V32.07a1.3,1.3,0,0,1-1.34,1.34H5.25a1.3,1.3,0,0,1-1.34-1.34V7.93A1.3,1.3,0,0,1,5.25,6.59Z" />
          </g>
        </g>
      </svg>
    </div>
  )
}

interface FileTreeProps {
  filenames: string[] //it should be recursive file nodes
}

export const FileTree = ({ filenames }: FileTreeProps): JSX.Element => (
  <div
    css={css`
      padding: 4px;
      background-color: #2d2d2d;
    `}
  >
    {filenames.map((filename, index) => {
      return (
        <div
          key={index}
          css={css`
            color: #ccc;
          `}
        >
          {filename}
        </div>
      )
    })}
  </div>
)

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
        >
          <FileTree filenames={['main.js', 'package.json']} />
          <FileViewer
            files={[
              { filename: 'main.js', filecontent: fileContentMainJs },
              {
                filename: 'package.json',
                filecontent: fileContentPackageJson,
              },
            ]}
            selectFileIndex={data.fileSet.selectFileIndex}
          />
        </div>
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
