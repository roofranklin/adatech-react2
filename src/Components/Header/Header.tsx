import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const TopBar = styled.div`
    width: 100%;
    height: 100px;
    background-color: #D5D3BB;
`
const Container = styled.div`
    width: 1140px;
    display: block;
    margin: auto;
`
const Logo = styled.img`
    height: 72px;
    padding: 16px 0;
`
const Menu = styled.ul`
    float: right;
    display: flex;
    padding-top: 25px;
`
const MenuItem = styled.li`   
    padding-left: 36px;
    text-transform: uppercase;
    list-style-type: none;
    font-size: 16px;
`
const NavbarLink = styled(Link)`
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    color: #837460;
`


const Header: React.FC = () => {
  return (
    <TopBar>
        <Container>
            <Link to="/">
                <Logo src="https://i.ibb.co/4Khf3tz/benfit-logo.png" alt="Benfit Logo" />
            </Link>
            <Menu>
                <MenuItem>
                    <NavbarLink to="/cart">Meu Carrinho</NavbarLink>
                </MenuItem>
                <MenuItem>
                    <NavbarLink to="/register">Meu Cadastro</NavbarLink>
                </MenuItem>
            </Menu>
        </Container> 
    </TopBar>
  );
};

export default Header;
