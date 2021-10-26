/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const image1base64 =
  'data:image/png;base64, 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'
const image2base64 =
  'data:image/png;base64, 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'
const image3base64 =
  'data:image/png;base64, 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'

interface ImageProps {
  src: string
}

export const Image = ({ src }: ImageProps) => <img src={src} alt="" />

export const CarouselItem = () => (
  <div
    css={css`
      background-color: black;
    `}
  >
    <Image src={image3base64} />
  </div>
)

export const Carousel = () => (
  <div>
    <CarouselItem />
  </div>
)

export const MainContainer = () => {
  return (
    <main>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Carousel />
      </div>
    </main>
  )
}

const App = (): JSX.Element => <MainContainer />

export default App
