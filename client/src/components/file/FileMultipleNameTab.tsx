/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileNameTab } from './FileNameTab'
import { FileMultipleNameTabFragment } from '../../lib/generated/graphql'

interface FileMultipleNameTabProps {
  fragment: FileMultipleNameTabFragment
  selectFileIndex: number
  selectFileCallback: (fileIndex: number) => void
}

export const FileMultipleNameTab = ({
  fragment,
  selectFileIndex,
  selectFileCallback,
}: FileMultipleNameTabProps): JSX.Element => {
  if (!fragment.files) {
    return <></>
  } else {
    return (
      <div
        css={css`
          display: flex;
          align-items: flex-start;

          > button:first-child {
            margin-left: 0px;
          }
          > button {
            margin-left: 4px;
          }
        `}
      >
        {fragment.files.map((file, index) =>
          !file ? (
            <></>
          ) : (
            <button
              css={css`
                display: flex;
                background-color: transparent;
                padding: 0px;
                border-style: none;
                font-size: 16px;
              `}
              onClick={() => selectFileCallback(index)}
            >
              <FileNameTab
                key={index}
                filename={file.fileName}
                selected={index === selectFileIndex}
              />
            </button>
          )
        )}
      </div>
    )
  }
}

FileMultipleNameTab.fragment = gql`
  fragment FileMultipleNameTab on FileMultiple {
    files {
      fileName
    }
  }
`
