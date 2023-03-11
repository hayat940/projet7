import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const CardLink = Styled(Link)`
  
    justify-content: flex-start;
    display: flex;
    align-items: flex-end;	
    width: 100%;
    height: 255px;
    margin-top: 20px;
    padding: 15px 20px;
    background-size:cover;
    background-position:center center;
	background: url(${props => props.cover});
    // background-image: linear-gradient(180deg, rgb(237, 23, 23) 0, rgb(154, 80, 95));
    border-radius: 25px; 
    color: #ffffff;
    font-size: 18px;
      
    @media (min-width: 768px) {
		width: 30.5%;
        height: 340px;
        padding: 20px;
        background-size:cover;
	}
`;

function Card({ titre, cover, id }) {
	return (
		<CardLink to={`./fiche-logement/${id}`} cover={cover} >
			{titre}
		</CardLink>
	)
}

export default Card