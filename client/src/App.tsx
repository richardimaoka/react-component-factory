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
  ParagraphComponentFragment,
  TextChunkComponentFragment,
  useMainQuery,
} from './generated/graphql'

export interface TextChunkProps {
  fragment: TextChunkComponentFragment
}

const InnerComponent = ({ fragment }: TextChunkProps): JSX.Element => {
  const cssProperties = css`
    background-color: ${fragment.highlight ? '#E6FF01' : 'transparent'};
    font-weight: ${fragment.bold ? 'bold' : 'normal'};
    text-decoration: ${fragment.strikeout ? 'line-through' : 'no'};
  `
  console.log('InnerComponent aaa', fragment.text)

  return fragment.inlineCode ? (
    <code
      css={css`
        background-color: #252525;
        color: white;
      `}
    >
      {fragment.text}
    </code>
  ) : (
    <span css={cssProperties}>{fragment.text}</span>
  )
}

export const TextChunkComponent = ({
  fragment,
}: TextChunkProps): JSX.Element => {
  if (fragment.hyperlinkUrl) {
    return (
      <a href={fragment.hyperlinkUrl}>
        <InnerComponent fragment={fragment} />
      </a>
    )
  } else {
    return <InnerComponent fragment={fragment} />
  }
}

TextChunkComponent.fragments = gql`
  fragment TextChunkComponent on TextChunk {
    text
    highlight
    bold
    hyperlinkUrl
    strikeout
    inlineCode
  }
`

interface ParagraphProps {
  fragment: ParagraphComponentFragment
}

export const ParagraphComponent = ({
  fragment,
}: ParagraphProps): JSX.Element => {
  if (!fragment.chunks) {
    return <></>
  } else {
    return (
      <p
        css={css`
          color: #0a0a0a;
          margin: 0px;
        `}
        contentEditable={false}
      >
        {fragment.chunks.map((chunk, index) =>
          chunk ? <TextChunkComponent key={index} fragment={chunk} /> : <></>
        )}
      </p>
    )
  }
}

ParagraphComponent.fragments = gql`
  fragment ParagraphComponent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }

  ${TextChunkComponent.fragments}
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

interface ActionInstructionComponentProps {
  fragment: ParagraphComponentFragment
}

export const ActionInstructionComponent = ({
  fragment,
}: ActionInstructionComponentProps): JSX.Element => (
  <div
    css={css`
      display: inline-block;
      padding: 8px;
      width: 100%;
      border: solid 1px #eecf33;
    `}
  >
    <ParagraphComponent fragment={fragment} />
  </div>
)

ActionInstructionComponent.fragment = gql`
  fragment ActionStatementComonent on Paragraph {
    chunks {
      ...TextChunkComponent
    }
  }

  ${TextChunkComponent.fragments}
`

interface ActionComponentProps {
  fragment: ActionComponentFragment
}

export const ActionComponent = ({
  fragment,
}: ActionComponentProps): JSX.Element => {
  return (
    <div>
      <ActionLabelComponent />
      {fragment.instruction ? (
        <ActionInstructionComponent fragment={fragment.instruction} />
      ) : (
        <></>
      )}
      <ActionStackComponent />
    </div>
  )
}

ActionComponent.fragment = gql`
  fragment ActionComponent on Action {
    instruction {
      ...ParagraphComponent
    }
  }

  ${ParagraphComponent.fragments}
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
