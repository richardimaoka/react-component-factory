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
import { CarouselTransition } from './interfaces'
export interface CarouselComponentProps {
  fragment: CarouselComponentFragment
}

export const CarouselComponent = ({
  fragment,
}: CarouselComponentProps): JSX.Element => {
  const [currentTransition, setTransition] = useState<CarouselTransition>({
    from: 0,
    to: 0,
  })

  // const gotoNextSlide = () => {}

  return (
    <div
      css={css`
        width: 640px;
        height: 360px;
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
