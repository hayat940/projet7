import React from 'react';
import Styled from 'styled-components'; 
import { NavLink } from 'react-router-dom';
import Image from '../images/kasa.svg'

const Head = Styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center; 
    img {
        width: 145px;
    }
    nav {
        display: flex;
        gap: 20px;
        height: 68px;
        align-items: center;
        a {
            
            font-weight: 500;
            font-size: 12px;
            text-transform: uppercase;  
            text-decoration-line: underline;
        }
    }
    
    @media (min-width: 768px) {
        img {
            width: 210px;
        }
        nav {
            gap: 80px;
            a {
                font-size: 24px;
                text-transform: none;
              }
        }
    }
`;

function Header() {
    return (
        <Head>
            <img src={Image} alt="logo Kasa" />
            <nav>   
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos</NavLink>
            </nav>
        </Head>
    );
}

export default Header;