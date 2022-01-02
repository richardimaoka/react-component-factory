/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileTreeComponentFragment } from '../../lib/generated/graphql'
import { FileTreeNodeComponent } from './FileTreeNodeComponent'

interface FileTreeComponentProps {
  fragment: FileTreeComponentFragment
}

export const FileTreeComponent = ({
  fragment,
}: FileTreeComponentProps): JSX.Element => {
  if (!fragment || !fragment.treeNodes || fragment.treeNodes.length === 0) {
    return <></>
  } else {
    return (
      <div>
        {fragment.treeNodes.map((node) =>
          !node ? <></> : <FileTreeNodeComponent fragment={node} />
        )}
      </div>
    )
  }
}

FileTreeComponent.fragment = gql`
  fragment FileTreeComponent on FileTree {
    treeNodes {
      ...FileTreeNodeComponent
    }
  }

  ${FileTreeNodeComponent.fragment}
`
