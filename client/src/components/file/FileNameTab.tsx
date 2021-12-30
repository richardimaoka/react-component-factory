/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface FileNameTabProps {
  filename: string | null | undefined
  selected: boolean
}

export const FileNameTab = ({
  filename,
  selected,
}: FileNameTabProps): JSX.Element => {
  return (
    <div
      css={css`
        display: flex;
      `}
      onClick={() => {
        //Somehow update the selectFileIndex, possibly via Apollo reactive variable
        //https://www.apollographql.com/docs/react/local-state/managing-state-with-field-policies/#storing-local-state-in-reactive-variables
      }}
    >
      <div
        css={css`
          border-top-right-radius: 8px;
          border-bottom: solid ${selected ? 2 : 0}px #2d2d2d;
          padding-top: 4px;
          padding-bottom: 6px;
          padding-right: 8px;
          padding-left: 8px;
          background-color: #2d2d2d;
          color: ${filename ? '#ccc' : '#7e7e7e'};
        `}
      >
        {filename ? filename : 'unknown'}
      </div>
    </div>
  )
}
