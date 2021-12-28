/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import {
  CarouselScrollComponent,
  numContentfulCarouselItems,
} from './CarouselScrollComponent'
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
  //currentItem is zero start
  const [currentTransition, setTransition] = useState<CarouselTransition>({
    to: 0,
  })

  const gotoNextItem = () => {
    console.log(
      'gotoNextItem called ',
      numContentfulCarouselItems(fragment),
      ' ',
      currentTransition.to + 1
    )
    const numItems = numContentfulCarouselItems(fragment)
    const nextItem = currentTransition.to + 1
    if (nextItem < numItems) {
      setTransition({ to: nextItem })
    }
  }

  const gotoPrevItem = () => {
    const prevItem = currentTransition.to - 1
    if (0 <= prevItem) {
      setTransition({ to: prevItem })
    }
  }

  return (
    <div
      css={css`
        width: ${CarouselItemWidth}px;
        height: ${CarouselItemHeight}px;
      `}
    >
      <CarouselScrollComponent
        fragment={fragment}
        transition={currentTransition}
      />
      <CarouselControlBar
        prevButtonCallback={gotoPrevItem}
        nextButtonCallback={gotoNextItem}
      />
      <CarouselDescriptionComponent />
    </div>
  )
}

CarouselComponent.fragment = gql`
  fragment CarouselComponent on CarouselImage {
    ...CarouselScrollComponent
  }
  ${CarouselScrollComponent.fragment}
`
