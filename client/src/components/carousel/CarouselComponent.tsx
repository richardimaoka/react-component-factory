/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useState } from 'react'
import { CarouselComponentFragment } from '../../lib/generated/graphql'
import { CarouselControlBar } from './CarouselControlBar'
import {
  CarouselTransition,
  ImageItemHeight,
  ImageItemWidth,
} from './definitions'
import { CarouselDescriptionComponent } from './CarouselDescriptionComponent'
import {
  ImageScrollComponent,
  numImageItems,
} from './CarouselImageScrollComponent'
export interface CarouselComponentProps {
  fragment: CarouselComponentFragment
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
        width: ${ImageItemWidth}px;
        height: ${ImageItemHeight}px;
      `}
    >
      <ImageScrollComponent
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
  )
}

CarouselComponent.fragment = gql`
  fragment CarouselComponent on CarouselImage {
    ...ImageScrollComponent
    ...CarouselDescriptionComponent
  }
  ${ImageScrollComponent.fragment}
  ${CarouselDescriptionComponent.fragment}
`
