/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VideoWidth } from './definitions'

interface VideoDescriptionProps {
  caption: string | null | undefined
}

export const VideoDescriptionComponent = ({
  caption,
}: VideoDescriptionProps): JSX.Element => {
  if (!caption) {
    return <></>
  } else {
    return (
      <div
        css={css`
          border: solid 1px #414141;
          width: ${VideoWidth - 2}px; /*- 2px for borders*/
          background-color: white;
        `}
      >
        <p
          css={css`
            padding: 4px 8px;
            margin: 0px;
          `}
        >
          {caption}
        </p>
      </div>
    )
  }
}
