import React from 'react';
import styled from 'styled-components'
import {Title} from '../Styles/title'

const NavbarStyle = styled.div`
  background: red;
`

const Logo = styled(Title)`
  color: #fff;
  font-size: 18px;
`

export default function Navbar() {
    return (
        <NavbarStyle>
            <Logo>
                Logo
            </Logo>
        </NavbarStyle>
    )
    
} 