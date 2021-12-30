/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FoldedIcon } from './FoldedIcon'
import { UnfoldedIcon } from './UnfoldedIcon'

interface FoldableDescriptionBarProps {
  folded: boolean
  shortDescription: string | null | undefined
  transitionToFold: () => void
  transitionToUnfold: () => void
}

export const FoldableDescriptionBar = ({
  folded,
  shortDescription,
  transitionToFold,
  transitionToUnfold,
}: FoldableDescriptionBarProps): JSX.Element => {
  return (
    <div
      css={css`
        background-color: #aed5f3;
        display: flex;
        padding: 8px;
      `}
      onClick={folded ? transitionToUnfold : transitionToFold}
    >
      <button
        css={css`
          border-style: none;
          background-color: transparent;
          padding: 0px;
        `}
      >
        {folded ? <FoldedIcon /> : <UnfoldedIcon />}
      </button>
      <div
        css={css`
          padding-left: 4px;
          margin-top: auto;
          margin-bottom: auto;
        `}
      >
        {shortDescription}
      </div>
    </div>
  )
}
