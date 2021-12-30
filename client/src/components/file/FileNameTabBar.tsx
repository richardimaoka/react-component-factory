/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileNameTab } from './FileNameTab'
import { FileNameTabBarFragment } from '../../lib/generated/graphql'

interface FileNameTabBarProps {
  fragment: FileNameTabBarFragment
  selectFileIndex: number
}

export const FileNameTabBar = ({
  fragment,
  selectFileIndex,
}: FileNameTabBarProps): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
        align-items: flex-start;
      `}
    >
      {fragment.files.map((file, index) =>
        !file ? (
          <></>
        ) : (
          <FileNameTab
            key={index}
            filename={file.fileName}
            selected={true}
            // fileIndex={index}
            // selectedFileIndex={selectFileIndex}
          />
        )
      )}
    </div>
  )
}

FileNameTabBar.fragment = gql`
  fragment FileNameTabBar on FileMultiple {
    files {
      fileName
    }
  }
`
