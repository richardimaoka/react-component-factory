/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselItem } from './CarouselItemComponent'
import { CarouselContentComponentFragment } from '../../lib/generated/graphql'

interface CarouselContentProps {
  fragment: CarouselContentComponentFragment
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
        image ? <CarouselItem key={index} fragment={image} /> : <></>
      )}
    </div>
  ) : (
    <></>
  )
}

CarouselContentComponent.fragments = gql`
  fragment CarouselContentComponent on CarouselImage {
    images {
      ...CarouselItem
    }
  }
  ${CarouselItem.fragments}
`
