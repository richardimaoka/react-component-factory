/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileTreeComponentFragment } from '../../lib/generated/graphql'

const InnerComponent = ({ node }: { node: Node }): JSX.Element => {
  if (!node || !node.__typename) {
    return <></>
  } else {
    switch (node.__typename) {
      case 'File':
        return <FileNodeComponent fileName={node.fileName} />
      case 'Directory':
        return (
          <DirectoryNodeComponent
            directoryName={node.directoryName}
            nodes={node.nodes}
          />
        )
    }
  }
}

type Node =
  | DirectoryNodeComponentProps
  | FileNodeComponentProps
  | null
  | undefined

interface DirectoryNodeComponentProps {
  __typename?: 'Directory'
  directoryName: string | null | undefined
  nodes?: Array<Node> | null
}

const DirectoryNodeComponent = ({
  directoryName,
  nodes,
}: DirectoryNodeComponentProps): JSX.Element => {
  if (!nodes) {
    return <div>{directoryName}</div>
  } else {
    return (
      <div>
        <div>{directoryName}</div>
        {nodes.map((node, index) =>
          !node ? <></> : <InnerComponent key={index} node={node} />
        )}
      </div>
    )
  }
}

interface FileNodeComponentProps {
  __typename?: 'File'
  fileName: string | null | undefined
}

const FileNodeComponent = ({ fileName }: FileNodeComponentProps) => {
  return <div>{fileName}</div>
}

interface FileTreeComponentProps {
  fragment: FileTreeComponentFragment
}

export const FileTreeComponent = ({
  fragment,
}: FileTreeComponentProps): JSX.Element => {
  if (
    !fragment.rootDirectory ||
    !fragment.rootDirectory.nodes ||
    fragment.rootDirectory.nodes.length === 0
  ) {
    return <></>
  } else {
    const directoryName = fragment.rootDirectory.directoryName
      ? fragment.rootDirectory.directoryName
      : 'noname'

    console.log(fragment)
    return (
      <DirectoryNodeComponent
        directoryName={directoryName}
        nodes={fragment.rootDirectory.nodes}
      />
    )
  }
}

FileTreeComponent.fragment = gql`
  fragment FileTreeComponent on FileTree {
    # 1st depth
    rootDirectory {
      directoryName
      nodes {
        # 2nd depth
        ... on File {
          fileName
        }
        ... on Directory {
          directoryName
          nodes {
            # 3rd  depth
            ... on File {
              fileName
            }
            ... on Directory {
              directoryName
              nodes {
                # 4th depth
                ... on File {
                  fileName
                }
                ... on Directory {
                  directoryName
                  nodes {
                    # 5th depth
                    ... on File {
                      fileName
                    }
                    ... on Directory {
                      directoryName
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
