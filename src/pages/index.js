import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  color: #fff;
`

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 0 1rem;
`

const IndexPage = () => (
  <Container>
    <h1>Makapala PDM XIX</h1>
    <p>Satu Tim Satu Nyawa  | Kami tetap tumbuh</p>
    <StyledLink to="/">Blog</StyledLink>
    <StyledLink>Member</StyledLink>
    <StyledLink>Business</StyledLink>
  </Container>
)

export default IndexPage
