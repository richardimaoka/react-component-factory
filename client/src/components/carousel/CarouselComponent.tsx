/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselContentComponent } from './CarouselContentComponent'
import { CarouselControlBar } from './CarouselControlBar'
import { CarouselDescription } from './CarouselDescriptionComponent'
import { CarouselComponentFragment } from '../lib/generated/graphql'

export interface CarouselComponentProps {
  fragment: CarouselComponentFragment
}

export const CarouselComponent = ({
  fragment,
}: CarouselComponentProps): JSX.Element => {
  return (
    <div
      css={css`
        width: 640px;
      `}
    >
      <CarouselContentComponent fragment={fragment} />
      <CarouselControlBar />
      <CarouselDescription />
    </div>
  )
}

CarouselComponent.fragments = gql`
  fragment CarouselComponent on CarouselImage {
    ...CarouselContentComponent
  }
  ${CarouselContentComponent.fragments}
`
