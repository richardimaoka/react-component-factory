/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselContentComponentFragment } from '../../lib/generated/graphql'
import {
  CarouselItemComponent,
  isContentfulCarouselItem,
} from './CarouselItemComponent'

interface CarouselContentProps {
  fragment: CarouselContentComponentFragment
}

export const numContentfulCarouselItems = (
  fragment: CarouselContentComponentFragment
): number => {
  if (!fragment.images) {
    return 0
  } else {
    return fragment.images.filter((img) =>
      img ? isContentfulCarouselItem(img) : false
    ).length
  }
}

export const CarouselContentComponent = ({
  fragment,
}: CarouselContentProps): JSX.Element => {
  return fragment.images ? (
    <div
      css={css`
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
      `}
    >
      {fragment.images.map((image, index) =>
        image ? <CarouselItemComponent key={index} fragment={image} /> : <></>
      )}
    </div>
  ) : (
    <></>
  )
}

CarouselContentComponent.fragment = gql`
  fragment CarouselContentComponent on CarouselImage {
    images {
      ...CarouselItemComponent
    }
  }
  ${CarouselItemComponent.fragment}
`
