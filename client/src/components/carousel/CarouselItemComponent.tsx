/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselItemComponentFragment } from '../../lib/generated/graphql'
import failedImg from './failed.png'
interface CarouselItemComponentProps {
  fragment: CarouselItemComponentFragment
}

export const isEmptyCarouselItem = (
  fragment: CarouselItemComponentFragment
): boolean => {
  return !fragment.url
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
          width: 640px;
          height: 360px;
          align-items: center;
          background-image: url(${failedImg});
        `}
      >
        {fragment.url ? (
          <img src={failedImg} alt={fragment.alt ? fragment.alt : ''} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

CarouselItemComponent.fragment = gql`
  fragment CarouselItemComponent on Image {
    url
    alt
  }
`
