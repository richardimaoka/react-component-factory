/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { DescriptionComponentFragment } from '../../lib/generated/graphql'
import { CarouselTransition } from './definitions'
import { ImageItemComponent } from './ImageItemComponent'
import { numContentfulImageItems } from './ImageScrollComponent'

interface InnerComponentProps {
  caption: string | null | undefined
}

const InnerComponent = ({ caption }: InnerComponentProps): JSX.Element => (
  <p
    css={css`
      margin: 0px;
    `}
  >
    {caption}
  </p>
)

interface DescriptionComponentProps {
  fragment: DescriptionComponentFragment
  transition: CarouselTransition
}

export const DescriptionComponent = ({
  fragment,
}: DescriptionComponentProps): JSX.Element => {
  if (!fragment.images || numContentfulImageItems(fragment) === 0) {
    return <></>
  } else {
    return (
      <div
        css={css`
          padding: 8px;
          border: solid 1px #414141;
        `}
      >
        {fragment.images.map((image, index) =>
          image ? <InnerComponent key={index} caption={image.caption} /> : <></>
        )}
      </div>
    )
  }
}

DescriptionComponent.fragment = gql`
  fragment DescriptionComponent on CarouselImage {
    images {
      caption
      ...ImageItemComponent
    }
  }

  ${ImageItemComponent.fragment}
`
