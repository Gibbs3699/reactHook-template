import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function HeroSection() {
    return (
        <Wrapper>
            <ContentWrapper>
                <img src="/images/logos/logo.svg" alt="logo" />
                <h1>Design and code SwiftUI apps</h1>
                <p>Welcome to your new Gatsby site.</p>
                <Link to="/page-2/">Go to page 2</Link> <br />
            </ContentWrapper>
        </Wrapper>
    )
}

export default HeroSection

// choose div as html tag
const Wrapper = styled.div`
    background: linear-gradient(180deg, #4316DB 0%, #9076E7 100%);
`
const ContentWrapper = styled.div`
    max-width: 1234px;
`
