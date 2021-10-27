/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import Prism from 'prismjs'

interface FileTabProps {
  filename: string
}

export const FileTab = ({ filename }: FileTabProps) => (
  <div
    css={css`
      display: flex;
    `}
  >
    <div
      css={css`
        border-top-right-radius: 8px;
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

interface FileContentProps {
  filecontent: string
}

export const FileContent = ({ filecontent }: FileContentProps) => {
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

interface SingleFileProps {
  filename: string
  filecontent: string
}

export const SingleFile = ({ filename, filecontent }: SingleFileProps) => (
  <div>
    <FileTab filename={filename} />
    <FileContent filecontent={filecontent} />
  </div>
)

export const MainContainer = () => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
          width: 768px;
        `}
      >
        <SingleFile
          filename={'main.js'}
          filecontent={`import { createStore } from 'redux'

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
}`}
        />
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
