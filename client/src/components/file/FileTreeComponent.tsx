/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileTreeComponentFragment } from '../../lib/generated/graphql'

interface FileTreeComponentProps {
  fragment: FileTreeComponentFragment
}

export const FileTreeComponent = ({
  fragment,
}: FileTreeComponentProps): JSX.Element => {
  return <div>aaa</div>
}

FileTreeComponent.fragment = gql`
  fragment FileTreeComponent on FileTree {
    rootDirectory {
      directoryName
    }
  }
`
