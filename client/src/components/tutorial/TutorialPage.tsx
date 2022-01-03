/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { HeaderContainer } from '../header/HeaderContainer'
import { TutorialPageMainContainer } from './TutorialPageMainContainer'

export const TutorialPage = () => {
  return (
    <>
      <HeaderContainer fragment={{ title: 'aa' }} />
      <TutorialPageMainContainer />
    </>
  )
}
