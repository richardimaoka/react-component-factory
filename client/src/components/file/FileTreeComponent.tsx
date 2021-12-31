/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileTreeComponentFragment } from '../../lib/generated/graphql'
import { DirectoryNodeComponent } from './FileTreeNodeComponent'

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
