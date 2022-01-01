/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FileIcon } from './FileIcon'

type FileTreeNode =
  | DirectoryNodeComponentProps
  | FileNodeComponentProps
  | null
  | undefined

const InnerComponent = ({ node }: { node: FileTreeNode }): JSX.Element => {
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

interface DirectoryNodeComponentProps {
  __typename?: 'Directory'
  directoryName: string | null | undefined
  nodes?: Array<FileTreeNode> | null
}

export const DirectoryNodeComponent = ({
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

export const FileNodeComponent = ({ fileName }: FileNodeComponentProps) => {
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <FileIcon />
      <div>{fileName}</div>
    </div>
  )
}
