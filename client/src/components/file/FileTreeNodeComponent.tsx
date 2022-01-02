/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FileIcon } from './FileIcon'
import { DirectoryIcon } from './DirectoryIcon'
import { gql } from '@apollo/client'
import { FileTreeNodeComponentFragment } from '../../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../../switchExhaustivenessCheck'

interface IconComponentProps {
  nodeType: 'FILENODE' | 'DIRECTORYNODE'
}

const IconComponent = ({ nodeType }: IconComponentProps): JSX.Element => {
  switch (nodeType) {
    case 'FILENODE':
      return <FileIcon />
    case 'DIRECTORYNODE':
      return <DirectoryIcon />
    default:
      return switchExhaustivenessCheck(nodeType)
  }
}

interface FileTreeNodeComponentProps {
  fragment: FileTreeNodeComponentFragment
}

export const FileTreeNodeComponent = ({
  fragment,
}: FileTreeNodeComponentProps): JSX.Element => {
  const paddingLeft = !fragment.depth ? 0 : fragment.depth * 8
  return (
    <div
      css={css`
        padding-left: ${paddingLeft}px;
        display: flex;
      `}
    >
      <IconComponent
        nodeType={fragment.nodeType ? fragment.nodeType : 'FILENODE'}
      />
      <div
        css={css`
          margin-left: 2px;
        `}
      >
        {fragment.name}
      </div>
    </div>
  )
}

FileTreeNodeComponent.fragment = gql`
  fragment FileTreeNodeComponent on FileTreeNode {
    nodeType
    name
    depth
  }
`
