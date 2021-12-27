/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselContentComponent } from './CarouselContentComponent'
import { CarouselControlBar } from './CarouselControlBar'
import { CarouselDescriptionComponent } from './CarouselDescriptionComponent'
import { CarouselComponentFragment } from '../../lib/generated/graphql'

export interface CarouselComponentProps {
  fragment: CarouselComponentFragment
}

export const CarouselComponent = ({
  fragment,
}: CarouselComponentProps): JSX.Element => {
  console.log('kuzinsi')
  return (
    <div
      css={css`
        width: 640px;
      `}
    >
      <CarouselContentComponent fragment={fragment} />
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
