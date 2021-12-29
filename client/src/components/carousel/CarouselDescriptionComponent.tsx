/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { CarouselDescriptionComponentFragment } from '../../lib/generated/graphql'
import { CarouselTransition } from './definitions'

interface CarouselDescriptionComponentProps {
  fragment: CarouselDescriptionComponentFragment
  transition: CarouselTransition
}

export const CarouselDescriptionComponent = ({
  fragment,
}: CarouselDescriptionComponentProps): JSX.Element => (
  <div
    css={css`
      padding: 8px;
      border: solid 1px #414141;
    `}
  >
    <p
      css={css`
        margin: 0px;
      `}
    >
      本記事では上記2択のうち、よりリスクの少ない「許可されているアプリの一覧にアプリを追加する」に従います。それではWindowsのスタートメニューからWindows
      Defender ファイアウォールを立ち上げます。
    </p>
  </div>
)

CarouselDescriptionComponent.fragment = gql`
  fragment CarouselDescriptionComponent on CarouselImage {
    images {
      caption
    }
  }
`
