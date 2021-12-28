/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

interface CarouselControlPrevButtonProps {
  prevButtonCallback: () => void
}

const CarouselControlPrevButton = ({
  prevButtonCallback,
}: CarouselControlPrevButtonProps): JSX.Element => (
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
        fill: rgb(255, 255, 255);
      `}
    >
      <polygon points="2.23 20.09 19.11 10.34 36 0.59 36 20.09 36 39.59 19.11 29.84 2.23 20.09" />
    </svg>
  </button>
)

interface CarouselControlNextButtonProps {
  nextButtonCallback: () => void
}

const CarouselControlNextButton = ({
  nextButtonCallback,
}: CarouselControlNextButtonProps): JSX.Element => (
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
        fill: rgb(255, 255, 255);
      `}
    >
      <polygon points="38.28 20.09 21.39 29.84 4.51 39.59 4.51 20.09 4.51 0.59 21.39 10.34 38.28 20.09" />
    </svg>
  </button>
)

interface CarouselControlBarProps {
  nextButtonCallback: () => void
  prevButtonCallback: () => void
}

export const CarouselControlBar = ({
  nextButtonCallback,
  prevButtonCallback,
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
    <CarouselControlPrevButton prevButtonCallback={prevButtonCallback} />
    <CarouselControlNextButton nextButtonCallback={nextButtonCallback} />
  </div>
)
