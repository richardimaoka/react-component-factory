/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselItemComponentFragment } from '../../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../../switchExhaustivenessCheck'
import failedImg from './failed.png'
import backgroundImg from './background.png'
interface CarouselItemComponentProps {
  fragment: CarouselItemComponentFragment
  index: number
}

export const isContentfulCarouselItem = (
  fragment: CarouselItemComponentFragment
): boolean => {
  return !fragment.url
}

const calculateDirection = (
  fragment: CarouselItemComponentFragment
): 'horizontal' | 'vertical' => {
  if (!fragment.width || !fragment.height) {
    return 'horizontal' //default is horizontal
  } else {
    const ratio = fragment.width / fragment.height
    const threashold = 16.0 / 9.0
    if (ratio >= threashold) {
      console.log(ratio, 'horizontal', fragment)
      return 'horizontal'
    } else {
      console.log(ratio, 'vertical', fragment)

      return 'vertical'
    }
  }
}

interface InnerComponentProps {
  url: string
  alt: string
  direction: 'horizontal' | 'vertical'
  index: number
}

const InnerComponent = ({
  url,
  alt,
  direction,
  index,
}: InnerComponentProps): JSX.Element => {
  switch (direction) {
    case 'horizontal':
      return <img id={`${index}`} width="640" src={url} alt={alt} />
    case 'vertical':
      return <img id={`${index}`} height="360" src={url} alt={alt} />
    default:
      return switchExhaustivenessCheck(direction)
  }
}

export const CarouselItemComponent = ({
  fragment,
  index,
}: CarouselItemComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        flex-shrink: 0;
        scroll-snap-align: start;
        background-color: black;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 640px;
          height: 360px;
          background-image: url(${backgroundImg});
        `}
      >
        {fragment.url ? (
          <InnerComponent
            url={fragment.url}
            alt={fragment.alt ? fragment.alt : ''}
            direction={calculateDirection(fragment)}
            index={index}
          />
        ) : (
          <img id={`${index}`} src={failedImg} alt="failed to load img"></img>
        )}
      </div>
    </div>
  )
}

CarouselItemComponent.fragment = gql`
  fragment CarouselItemComponent on Image {
    url
    alt
    width
    height
  }
`
