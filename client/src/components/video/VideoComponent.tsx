/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import {
  VideoComponentFragment,
  VideoPlatform,
} from '../../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../../switchExhaustivenessCheck'

const VideoWidth = 640
const VideoHeight = 360

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

interface VimeoFrameProps {
  url: string
}

export const VimeoFrame = ({ url }: VimeoFrameProps): JSX.Element => {
  return (
    <iframe
      src={url}
      width={VideoWidth}
      height={VideoHeight}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
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

export interface VideoComponentProps {
  fragment: VideoComponentFragment
}

export const isEmptyVideo = (fragment: VideoComponentFragment): boolean => {
  return !fragment.url || !fragment.platform
}
const InnerComponent = ({ fragment }: VideoComponentProps): JSX.Element => {
  // below if check should be in line with isEmptyVideo
  if (!fragment.url || !fragment.platform) {
    return <></>
  } else {
    const platform = fragment.platform
    switch (platform) {
      case VideoPlatform.Youtube:
        return <YoutubeFrame url={fragment.url} />
      case VideoPlatform.Vimeo:
        return <VimeoFrame url={fragment.url} />
      default:
        return switchExhaustivenessCheck(platform)
    }
  }
}

export const VideoComponent = ({
  fragment,
}: VideoComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        width: ${VideoWidth}px;
        background-color: #414141;
      `}
    >
      <InnerComponent fragment={fragment} />
      <Description caption={fragment.caption} />
    </div>
  )
}

VideoComponent.fragment = gql`
  fragment VideoComponent on Video {
    platform
    url
    caption
  }
`
