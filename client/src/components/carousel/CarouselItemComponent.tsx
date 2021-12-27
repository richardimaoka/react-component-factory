/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselItemComponentFragment } from '../../lib/generated/graphql'

interface CarouselItemComponentProps {
  fragment: CarouselItemComponentFragment
}

export const CarouselItemComponent = ({
  fragment,
}: CarouselItemComponentProps): JSX.Element => {
  if (!fragment.url) {
    return <></>
  } else {
    return (
      <div
        css={css`
          flex-shrink: 0;
          scroll-snap-align: start;
          background-color: black;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            width: 640px;
            height: 360px;
            align-items: center;
          `}
        >
          <img src={fragment.url} alt={fragment.alt ? fragment.alt : ''} />
        </div>
      </div>
    )
  }
}

CarouselItemComponent.fragment = gql`
  fragment CarouselItemComponent on Image {
    url
    alt
  }
`
