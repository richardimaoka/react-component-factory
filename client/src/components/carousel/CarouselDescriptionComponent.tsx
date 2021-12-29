/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { useEffect, useRef } from 'react'
import { CarouselDescriptionComponentFragment } from '../../lib/generated/graphql'
import { CarouselTransition, ImageItemWidth } from './definitions'
import { ImageItemComponent } from './CarouselImageItemComponent'
import { numImageItems } from './CarouselImageScrollComponent'

interface InnerComponentProps {
  caption: string | null | undefined
}

const InnerComponent = ({ caption }: InnerComponentProps): JSX.Element => (
  <div
    css={css`
      flex-shrink: 0;
      scroll-snap-align: start;
      width: ${ImageItemWidth}px;
    `}
  >
    <p
      css={css`
        margin: 0px;
        padding: 4px 8px;
      `}
    >
      {caption}
    </p>
  </div>
)

interface CarouselDescriptionComponentProps {
  fragment: CarouselDescriptionComponentFragment
  transition: CarouselTransition
}

export const CarouselDescriptionComponent = ({
  fragment,
  transition,
}: CarouselDescriptionComponentProps): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft = ImageItemWidth * transition.to
    }
  })

  if (!fragment.images || numImageItems(fragment) === 0) {
    return <></>
  } else {
    return (
      <div
        css={css`
          display: flex;
          overflow-x: hidden;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          /* padding: 8px; */
          border: solid 1px #414141;
        `}
        ref={ref}
      >
        {fragment.images.map((image, index) =>
          image ? <InnerComponent key={index} caption={image.caption} /> : <></>
        )}
      </div>
    )
  }
}

CarouselDescriptionComponent.fragment = gql`
  fragment CarouselDescriptionComponent on CarouselImage {
    images {
      caption
      ...ImageItemComponent
    }
  }

  ${ImageItemComponent.fragment}
`
