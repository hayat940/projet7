// Composant page d'accueil
import Image from '../images/404.svg'
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Div404 = Styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img {
        width: 200px;
        margin: 200px 0 20px 0;
    }

    p {
        font-size: 18px;
        padding: 0 10vw;
        text-align: center;
    }

    a {
        margin: 100px 0;
        font-size: 14px;
    }

    @media (min-width: 768px) {
        img {
            width: 400px;
            margin: 100px 0;
        }
    
        p {
            font-size: 36px;
            padding: 0;
        }
    
        a {
            font-size: 18px;
        }
    }
`
function Erreur404() {
    return (
    <Div404>
        <img src={Image} alt="404.svg" />
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d’accueil</Link>
    </Div404>
    )
}
export default Erreur404;