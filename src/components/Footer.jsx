// Composant Footer
import React from 'react';
import Styled from 'styled-components';
import Image from '../images/LOGO-1.png'

const Foot = Styled.footer `
  background-color: rgb(2, 0, 0);
  width: 100%;
  height: 200px;
  margin-top:20px; 
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #F7F7F7; 
    padding-top:60px ;
    img {
    margin-bottom:40px;
    }
    p {
    
    }

  }
`; 

function Footer() {
  return (
    <Foot>
      <div>
          <img src={Image} alt="LOGO" />
          <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </Foot>
  );
}

export default Footer;