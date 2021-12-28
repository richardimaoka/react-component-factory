/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselItemComponentFragment } from '../../lib/generated/graphql'
import { switchExhaustivenessCheck } from '../../switchExhaustivenessCheck'
import failedImg from './images/failed.png'
import backgroundImg from './images/background.png'
import { CarouselItemHeight, CarouselItemWidth } from './definitions'
interface CarouselItemComponentProps {
  fragment: CarouselItemComponentFragment
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
    return ratio >= 16.0 / 9.0 ? 'horizontal' : 'vertical'
  }
}

interface InnerComponentProps {
  url: string
  alt: string
  direction: 'horizontal' | 'vertical'
}

const InnerComponent = ({
  url,
  alt,
  direction,
}: InnerComponentProps): JSX.Element => {
  switch (direction) {
    case 'horizontal':
      return <img width={CarouselItemWidth} src={url} alt={alt} />
    case 'vertical':
      return <img height={CarouselItemHeight} src={url} alt={alt} />
    default:
      return switchExhaustivenessCheck(direction)
  }
}

export const CarouselItemComponent = ({
  fragment,
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
          width: ${CarouselItemWidth}px;
          height: ${CarouselItemHeight}px;
          background-image: url(${backgroundImg});
        `}
      >
        {fragment.url ? (
          <InnerComponent
            url={fragment.url}
            alt={fragment.alt ? fragment.alt : ''}
            direction={calculateDirection(fragment)}
          />
        ) : (
          <img src={failedImg} alt="failed to load img"></img>
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
