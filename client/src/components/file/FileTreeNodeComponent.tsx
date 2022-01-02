/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FileIcon } from './FileIcon'
import { DirectoryIcon } from './DirectoryIcon'
import { gql } from '@apollo/client'
import { FileTreeNodeComponentFragment } from '../../lib/generated/graphql'

interface FileTreeNodeComponentProps {
  fragment: FileTreeNodeComponentFragment
}

export const FileTreeNodeComponent = ({
  fragment,
}: FileTreeNodeComponentProps): JSX.Element => {
  return <div>{fragment.name}</div>
}

FileTreeNodeComponent.fragment = gql`
  fragment FileTreeNodeComponent on FileTreeNode {
    nodeType
    name
    depth
  }
`
