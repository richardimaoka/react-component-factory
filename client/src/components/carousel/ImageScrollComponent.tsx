/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import { ImageScrollComponentFragment } from '../../lib/generated/graphql'
import {
  CarouselItemComponent,
  isContentfulCarouselItem,
} from './CarouselItemComponent'
import { CarouselItemWidth, CarouselTransition } from './definitions'

interface ImageScrollComponentProps {
  fragment: ImageScrollComponentFragment
  transition: CarouselTransition
}

export const numContentfulCarouselItems = (
  fragment: ImageScrollComponentFragment
): number => {
  if (!fragment.images) {
    return 0
  } else {
    return fragment.images.filter((img) => img && isContentfulCarouselItem(img))
      .length
  }
}

export const ImageScrollComponent = ({
  fragment,
  transition,
}: ImageScrollComponentProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = CarouselItemWidth * transition.to
    }
  })

  if (!fragment.images) {
    return <></>
  } else {
    return (
      <div
        css={css`
          display: flex;
          overflow-x: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        `}
        ref={ref}
      >
        {fragment.images.map((image, index) =>
          image ? <CarouselItemComponent key={index} fragment={image} /> : <></>
        )}
      </div>
    )
  }
}

ImageScrollComponent.fragment = gql`
  fragment ImageScrollComponent on CarouselImage {
    images {
      ...CarouselItemComponent
    }
  }
  ${CarouselItemComponent.fragment}
`
