/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileNameTab } from './FileNameTab'
import { FileNameMultipleTabFragment } from '../../lib/generated/graphql'

interface FileNameMultipleTabProps {
  fragment: FileNameMultipleTabFragment
  selectFileIndex: number
}

export const FileNameMultipleTab = ({
  fragment,
  selectFileIndex,
}: FileNameMultipleTabProps): JSX.Element => {
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

FileNameMultipleTab.fragment = gql`
  fragment FileNameMultipleTab on FileMultiple {
    files {
      fileName
    }
  }
`
