/** @jsxImportSource @emotion/react */
import { VideoHeight, VideoWidth } from './definitions'

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
