import { Link as RouterLink } from 'react-router-dom';
import logements from '../datas/logements.json';
import Styled from 'styled-components';

const Link = Styled(RouterLink) `
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
`
function Card({ titre, cover, id }){
  // Vérifier si l'ID de l'appartement est valide
  const isIdValid = (id) => {
    return logements.some((logement) => logement.id === id);
  };
  
  // Créer le lien vers la fiche du logement
  const link = isIdValid(id) ? `./fiche-logement/${id}` : '/Erreur404';

  return (
    <Link to={link} cover={cover}>
      {titre}
    </Link>
  );
}

export default Card;
