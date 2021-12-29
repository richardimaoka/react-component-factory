/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useState } from 'react'
import { CarouselComponentFragment } from '../../lib/generated/graphql'
import { CarouselControlBar } from './CarouselControlBar'
import { DescriptionComponent } from './DescriptionComponent'
import {
  ImageScrollComponent,
  numContentfulImageItems,
} from './ImageScrollComponent'
import {
  ImageItemHeight,
  ImageItemWidth,
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
    const numItems = numContentfulImageItems(fragment)
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
    ...ImageScrollComponent
    ...DescriptionComponent
  }
  ${ImageScrollComponent.fragment}
  ${DescriptionComponent.fragment}
`
