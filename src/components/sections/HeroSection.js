import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"
import {H1, MediumText} from "../styles/TextStyles"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Design <br />
            and code SwiftUI apps
          </Title>
          <Description>Welcome to your new Gatsby site.</Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

// choose div as html tag
const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 60px;
`
const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.light.text1};
`
const Description = styled(MediumText)`
`
