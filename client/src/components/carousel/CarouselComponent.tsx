/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useState } from 'react'
import { CarouselComponentFragment } from '../../lib/generated/graphql'
import { CarouselControlBar } from './CarouselControlBar'
import { DescriptionComponent } from './DescriptionComponent'
import {
  CarouselScrollComponent,
  numContentfulCarouselItems,
} from './CarouselScrollComponent'
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
      <DescriptionComponent
        fragment={fragment}
        transition={currentTransition}
      />
    </div>
  )
}

CarouselComponent.fragment = gql`
  fragment CarouselComponent on CarouselImage {
    ...CarouselScrollComponent
    ...DescriptionComponent
  }
  ${CarouselScrollComponent.fragment}
  ${DescriptionComponent.fragment}
`
