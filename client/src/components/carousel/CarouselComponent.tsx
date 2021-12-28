/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import {
  CarouselContentComponent,
  numContentfulCarouselItems,
} from './CarouselContentComponent'
import { CarouselControlBar } from './CarouselControlBar'
import { CarouselDescriptionComponent } from './CarouselDescriptionComponent'
import { CarouselComponentFragment } from '../../lib/generated/graphql'
import { useState } from 'react'
import {
  CarouselItemHeight,
  CarouselItemWidth,
  CarouselTransition,
} from './definitions'
export interface CarouselComponentProps {
  fragment: CarouselComponentFragment
}

export const CarouselComponent = ({
  fragment,
}: CarouselComponentProps): JSX.Element => {
  const [currentTransition, setTransition] = useState<CarouselTransition>({
    to: 2,
  })

  // const gotoNextSlide = () => {}

  return (
    <div
      css={css`
        width: ${CarouselItemWidth}px;
        height: ${CarouselItemHeight}px;
      `}
    >
      <CarouselContentComponent
        fragment={fragment}
        transition={currentTransition}
      />
      <CarouselControlBar />
      <CarouselDescriptionComponent />
    </div>
  )
}

CarouselComponent.fragment = gql`
  fragment CarouselComponent on CarouselImage {
    ...CarouselContentComponent
  }
  ${CarouselContentComponent.fragment}
`
