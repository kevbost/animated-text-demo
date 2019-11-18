import React from 'react'
import { Text } from 'rebass/styled-components'
import GlobalStyle from './utils/GlobalStyle'
import GithubCorner from './components/GithubCorner'
import AnimatedText from './components/AnimatedText'
import {
  StyledGradientWrapper,
  TitleWrapper
} from './components/styled'


const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <GithubCorner />
      <StyledGradientWrapper>
        <TitleWrapper>
          <AnimatedText
            textColor="rgba(253, 89, 73, 0.5)"
            overlayColor="#fff"
          >
            <Text fontSize={[ '13vw', '14vw', '14vw', '9rem' ]}>
              {'Welcome'}
            </Text>
            <Text fontSize={[ '8vw', '9vw', '9vw', '6rem' ]}>
              {'to this silly'}
            </Text>
            <Text fontSize={[ '15vw', '18vw', '18vw', '12rem' ]}>
              {'demo!'}
            </Text>
          </AnimatedText>
        </TitleWrapper>
      </StyledGradientWrapper>
    </React.Fragment>
  )
}

export default App
