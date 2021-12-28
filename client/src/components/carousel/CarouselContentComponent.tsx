/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import { CarouselContentComponentFragment } from '../../lib/generated/graphql'
import {
  CarouselItemComponent,
  isContentfulCarouselItem,
} from './CarouselItemComponent'
import { CarouselTransition } from './interfaces'

interface CarouselContentProps {
  fragment: CarouselContentComponentFragment
  transition: CarouselTransition
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
  transition,
}: CarouselContentProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log('printing out ref: ', ref.current)
    console.log(ref.current?.scrollLeft)
    if (ref.current) {
      ref.current.scrollLeft = 1600
    }
    console.log(ref.current?.scrollLeft)
  })

  if (!fragment.images) {
    return <></>
  } else {
    return (
      <div
        css={css`
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
        `}
        ref={ref}
      >
        {fragment.images.map((image, index) =>
          image ? (
            <CarouselItemComponent
              key={index}
              index={index + 1}
              fragment={image}
            />
          ) : (
            <></>
          )
        )}
      </div>
    )
  }
}

CarouselContentComponent.fragment = gql`
  fragment CarouselContentComponent on CarouselImage {
    images {
      ...CarouselItemComponent
    }
  }
  ${CarouselItemComponent.fragment}
`
