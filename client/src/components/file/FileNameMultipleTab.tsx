/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { FileNameTab } from './FileNameTab'
import { FileNameMultipleTabFragment } from '../../lib/generated/graphql'

interface FileNameMultipleTabProps {
  fragment: FileNameMultipleTabFragment
  selectFileIndex: number
  selectFileCallback: (fileIndex: number) => void
}

export const FileNameMultipleTab = ({
  fragment,
  selectFileIndex,
  selectFileCallback,
}: FileNameMultipleTabProps): JSX.Element => {
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

FileNameMultipleTab.fragment = gql`
  fragment FileNameMultipleTab on FileMultiple {
    files {
      fileName
    }
  }
`
