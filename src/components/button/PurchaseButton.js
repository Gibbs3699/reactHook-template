import React from "react"
import styled from "styled-components"


export default function PurchaseButton() {
  return (
    <Wrapper>
          <Title>
            Get Access
            <SubTitle> Press here </SubTitle>
          </Title>
    </Wrapper>
  )
}


// choose div as html tag
const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const Title = styled.p`
`
const SubTitle = styled.p`
`