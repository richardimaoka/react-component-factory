/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { VideoComponentFragment } from '../lib/generated/graphql'

const VideoWidth = 640
const VideoHeight = 360

export interface VideoComponentProps {
  fragment: VideoComponentFragment
}

export const isEmptyVideo = (fragment: VideoComponentFragment): boolean => {
  return !fragment.url || !fragment.platform
}

interface YoutubeFrameProps {
  url: string
}

export const YoutubeFrame = ({ url }: YoutubeFrameProps): JSX.Element => {
  return (
    <iframe
      src={url}
      width={VideoWidth}
      height={VideoHeight}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  )
}

interface DescriptionProps {
  caption: string | null | undefined
}

export const Description = ({ caption }: DescriptionProps): JSX.Element => {
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

export const VideoComponent = ({
  fragment,
}: VideoComponentProps): JSX.Element => {
  if (!fragment.url || !fragment.platform || isEmptyVideo(fragment)) {
    return <></>
  } else {
    return (
      <div
        css={css`
          width: ${VideoWidth}px;
          background-color: #414141;
        `}
      >
        <YoutubeFrame url={fragment.url} />
        <Description caption={fragment.caption} />
      </div>
    )
  }
}

VideoComponent.fragment = gql`
  fragment VideoComponent on Video {
    platform
    url
    caption
  }
`
