/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import {
  VideoComponentFragment,
  VideoPlatform,
} from '../../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../../switchExhaustivenessCheck'
import { VideoWidth } from './definitions'
import { VimeoFrame, YoutubeFrame } from './EmbedComponent'
import { VideoDescriptionComponent } from './VideoDescriptionComponent'

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
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: ${VideoWidth}px;
          background-color: #414141;
        `}
      >
        <InnerComponent fragment={fragment} />
        <VideoDescriptionComponent caption={fragment.caption} />
      </div>
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
