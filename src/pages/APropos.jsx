//composant page apropos//
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";

import styled from "styled-components";

const DivAPropos = styled.div`
    width: 100%;
    max-width: 1023px;
    margin: 0 auto;
    padding-bottom: 30px;
`;


function APropos() {
    return (
        <div>
            <Banner imageUrl={'apropos.jpg'} opacite={0}></Banner>
            <DivAPropos>

                <Accordion title={"Fiabilité"}>Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, 
                et toutes les informations sont régulièrement vérifiées par nos équipes.</Accordion>

                 
                <Accordion title={"Respect"}>La bienveillance fait partie des valeurs fondatrices de Kasa.
                 Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</Accordion>
            

                <Accordion title={"Service"}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                 N'hésitez pas à nous contacter si vous avez la moindre question.</Accordion>

            
                <Accordion title={"Sécurité"}>La sécurité est la priorité de Kasa.
                Aussi bien pour nos hôtes que pour les voyageurs, 
                chaque logement correspond aux critères de sécurité établis par nos services.
                En laissant une note aussi bien à l'hôte qu'au locataire, 
                cela permet à nos équipes de vérifier que les standards sont bien respectés.
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</Accordion>

            </DivAPropos> 
                  
        </div>
    )
}
export default APropos;




