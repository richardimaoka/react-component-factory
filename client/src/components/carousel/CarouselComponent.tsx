/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useState } from 'react'
import { CarouselComponentFragment } from '../../lib/generated/graphql'
import { CarouselControlBar } from './CarouselControlBar'
import { CarouselDescriptionComponent } from './CarouselDescriptionComponent'
import {
  CarouselImageScrollComponent,
  numImageItems,
} from './CarouselImageScrollComponent'
import { CarouselTransition, ImageItemWidth } from './definitions'

export interface CarouselComponentProps {
  fragment: CarouselComponentFragment
}

export const isEmptyCarouselComponent = (
  fragment: CarouselComponentFragment
): boolean => {
  return numImageItems(fragment) === 0
}

export const CarouselComponent = ({
  fragment,
}: CarouselComponentProps): JSX.Element => {
  const [currentTransition, setTransition] = useState<CarouselTransition>({
    //currentTransition is zero start
    to: 0,
  })
  const numItems = numImageItems(fragment)
  const gotoNextItem = () => {
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
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: ${ImageItemWidth}px;
        `}
      >
        <CarouselImageScrollComponent
          fragment={fragment}
          transition={currentTransition}
        />
        <CarouselControlBar
          prevButtonCallback={gotoPrevItem}
          nextButtonCallback={gotoNextItem}
          prevButtonGrayOut={currentTransition.to === 0}
          nextButtonGrayOut={currentTransition.to === numItems - 1}
        />
        <CarouselDescriptionComponent
          fragment={fragment}
          transition={currentTransition}
        />
      </div>
    </div>
  )
}

CarouselComponent.fragment = gql`
  fragment CarouselComponent on CarouselImage {
    ...CarouselImageScrollComponent
    ...CarouselDescriptionComponent
  }
  ${CarouselImageScrollComponent.fragment}
  ${CarouselDescriptionComponent.fragment}
`
