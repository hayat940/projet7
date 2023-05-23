import Home from "../pages/Home";
import Erreur404 from "../pages/Erreur404";
import APropos from "../pages/APropos";
import FicheLogement from "../pages/FicheLogement";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Routes, Route } from "react-router-dom";
import "../css/style.css";

import Styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }

  body {
    background-color: #e5e5e5;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    color: #ff6060;
    @media (min-width: 768px) {
      padding-top: 50px;
    }
  }

  a {
    text-decoration: none;
    color: #ff6060;
  }

  
 a:hover {
    text-decoration: underline;
  }

`;



const Page = Styled.div`
  background-color: #ffffff;
  width: 100%;
  padding: 0 20px;
  @media (min-width: 768px) {
    max-width: 1440px;
    margin: 0 auto;
    padding: 50px 100px 0 100px;
  }
`;

function App() {
  return (

    <>
      <Page>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/fiche-logement/:id" element={<FicheLogement/>} />
          <Route path="*" element={<Erreur404 />} />
        </Routes>

      </Page>
      <Footer />
    </> 
  );
}

export default App;
