import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Accordion from "../components/Accordion";
import logements from "../datas/logements.json";
import Score from "../components/Score";

import styled from "styled-components";

const DivLogement = styled.div`

    display: flex;
    flex-direction: column; 

    h3 {
        font-size: 18px;
        font-weight: 500;
    }

    p {
        font-size: 14px;
        font-weight: 500;
    }

    .logement_gauche, .logement_droite {
        width: 100%;
    }

    @media (min-width: 768px) {
    
        margin-top: 40px;
        flex-direction: row;
        gap:50px;

        .titre_logement {
            width: 70%;
        }
        .proprietaire {
            width: 30%;
        }
    
        h3 {
            font-size: 36px;
        }
        p {
            font-size: 18px;
        }
        .logement_gauche, .logement_droite {
            width: 50%;
        }    
    
    }
`

const DivProprietaire = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
   
    @media (min-width: 768px) {
        width: 30%;
        flex-direction: column;
    }
`;
const DivIdentite = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    
    width: 100%;
    font-size: 18px;
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
     
        background-color: #c4c4c4;
        margin-left: 10px;
    }
`;

const DivTags = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap:10px;

    span{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FF6060;
        height: 18px;
        border-radius: 25px;
        color: rgb(250, 250, 250);
        font-size: 10px;
        padding: 0 10px;
    }

    @media (min-width: 768px) {

        margin: 20px 0;

        span {
            height: 25px;
            font-size: 14px;
            padding: 0 10px;
        }    
    }
`;


function FicheLogement() {

    //logement?id=df26rer searchParam
    //logement/df26rer  useParams
    const params = useParams();
    const logement = logements.find(logement => logement.id === params.id);

    return (
        <div>
            <Carrousel pictures = { logement.pictures } />
            <DivLogement>
                
                <div className="titre_logement">
                    
                    <h3>{logement.title}</h3>
                    <p>{logement.location}</p>
    
                    <DivTags>
                        {logement.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </DivTags>
                </div>
                
                <DivProprietaire>
                    <DivIdentite> 
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt=""/>         
                    </DivIdentite> 

                    <Score rating={logement.rating} />
                </DivProprietaire>
            </DivLogement>

            <DivLogement>

                <div className="logement_gauche">
                    <Accordion titre={'Description'}>{logement.description}</Accordion>
                </div>

                <div className="logement_droite">
                    <Accordion titre={'Équipements'}>{logement.equipments.map((equipment, index) => (<dt key={index}>{equipment}</dt>))}</Accordion>
                </div>

            </DivLogement>

        </div>

    );
}

export default FicheLogement;