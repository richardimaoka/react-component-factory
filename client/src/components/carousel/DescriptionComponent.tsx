/** @jsxImportSource @emotion/react */
import { gql } from '@apollo/client'
import { css } from '@emotion/react'
import { DescriptionComponentFragment } from '../../lib/generated/graphql'
import { CarouselTransition } from './definitions'

interface DescriptionComponentProps {
  fragment: DescriptionComponentFragment
  transition: CarouselTransition
}

export const DescriptionComponent = ({
  fragment,
}: DescriptionComponentProps): JSX.Element => (
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

DescriptionComponent.fragment = gql`
  fragment DescriptionComponent on CarouselImage {
    images {
      caption
    }
  }
`
