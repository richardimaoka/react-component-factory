/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface CarouselControlBarPrevButtonProps {
  prevButtonCallback: () => void
  grayOut: boolean
}

const CarouselControlBarPrevButton = ({
  prevButtonCallback,
  grayOut,
}: CarouselControlBarPrevButtonProps): JSX.Element => {
  const buttonColor = grayOut ? '#505050' : '#FFFFFF'
  return (
    <button
      css={css`
        width: 30px;
        height: 30px;
        padding: 0px;
        background-color: transparent;
        border-style: none;
      `}
      onClick={prevButtonCallback}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 40 40"
        css={css`
          fill: ${buttonColor};
        `}
      >
        <polygon points="2.23 20.09 19.11 10.34 36 0.59 36 20.09 36 39.59 19.11 29.84 2.23 20.09" />
      </svg>
    </button>
  )
}

interface CarouselControlBarNextButtonProps {
  nextButtonCallback: () => void
  grayOut: boolean
}

const CarouselControlBarNextButton = ({
  nextButtonCallback,
  grayOut,
}: CarouselControlBarNextButtonProps): JSX.Element => {
  const buttonColor = grayOut ? '#505050' : '#FFFFFF'
  return (
    <button
      css={css`
        width: 30px;
        height: 30px;
        padding: 0px;
        background-color: transparent;
        border-style: none;
      `}
      onClick={nextButtonCallback}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        viewBox="0 0 40 40"
        css={css`
          fill: ${buttonColor};
        `}
      >
        <polygon points="38.28 20.09 21.39 29.84 4.51 39.59 4.51 20.09 4.51 0.59 21.39 10.34 38.28 20.09" />
      </svg>
    </button>
  )
}

interface CarouselControlBarProps {
  nextButtonCallback: () => void
  prevButtonCallback: () => void
  nextButtonGrayOut: boolean
  prevButtonGrayOut: boolean
}

export const CarouselControlBar = ({
  nextButtonCallback,
  prevButtonCallback,
  nextButtonGrayOut,
  prevButtonGrayOut,
}: CarouselControlBarProps): JSX.Element => (
  <div
    css={css`
      background-color: #414141;
      height: 30px;
      padding-top: 4px;
      padding-bottom: 4px;
      padding-left: 8px;
      padding-right: 8px;
      display: flex;
      justify-content: space-between;
    `}
  >
    <CarouselControlBarPrevButton
      prevButtonCallback={prevButtonCallback}
      grayOut={prevButtonGrayOut}
    />
    <CarouselControlBarNextButton
      nextButtonCallback={nextButtonCallback}
      grayOut={nextButtonGrayOut}
    />
  </div>
)
