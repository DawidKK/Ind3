import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Navbar from './Navbar'

const theme = {
  black: '#393939',
  grey: '#3a3a3a',
  white: '#ededed',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0,0,0, 0.09)',
  bgDark: '#151935',
  bgLight: '#1b223e',
  accentColor: '#ffe400'
}

const InnerWrapper = styled.main`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2;
    font-family: 'Source Sans Pro';
    background: ${theme.bgDark};
    color: ${theme.white};
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }
`

const StyledNavbar = styled(Navbar)`
  display: flex;
  list-style: none;

  .navigation-list__item {
    margin-right: 3rem;

    a {
      color: ${theme.white};
    }
  }
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledNavbar />
      <InnerWrapper>
        {children}
      </InnerWrapper>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default Layout
