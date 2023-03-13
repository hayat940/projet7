import { React, useState } from 'react';
import Styled from 'styled-components';
import flecheGauche from '../images/fleche-gauche.svg'
import flecheDroite from '../images/fleche-droite.svg'

// Conteneur du carrousel
const CarrouselDiv = Styled.div `
    width:100%;
    position: relative;
    margin-top:10px;
    @media (min-width: 768px) {
        margin-top:40px;
    }
`

const CarrouselItem = Styled.div `
    width: 100%;
    height:225px;
    border-radius:25px;
    @media (min-width: 768px) {
       height:450px;
    }
`
const CarrouselImage = Styled.img `
    width: 100%;
    height:225px;
    border-radius:25px;
    object-fit: cover;
    @media (min-width: 768px) {
       height:450px;
    }

const CarrouselCaption = Styled.p `
    width: 100%;
    position:absolute;
    bottom:20px;
    color: #ffffff;
    text-align: center;
    display:none;
    @media (min-width: 768px) {
      display:block;
      

    }
`

const CarrouselControles = Styled.div `
    display:flex;
    justify-content: center;
`
const ImageGauche = Styled.img `
    position:absolute;
    left :20px;
    top:40%;
    width:20px;
    z-index:10;
    cursor:pointer;
    `
const ImageDroite = Styled.img `
    position:absolute;
    right:20px;
    top:40%;
    width:20px;
    z-index:10;
    cursor:pointer;
    `
// Component Carrousel
function Carrousel({pictures}) {
    const nbImages = pictures.length;
    const [courante, setCourante] = useState(0);
    const suivant = () => {
        setCourante(courante === nbImages-1 ? 0 : courante + 1)
    }
    const precedent = () => {
        setCourante(courante === 0 ? nbImages-1 : courante - 1)
    }
    return (
        <CarrouselDiv>

            {/* Contrôles (flèches) */}
            <CarrouselControles>
               <ImageGauche src={flecheGauche} onClick={precedent} alt="précédent" />
               <ImageDroite src={flecheDroite} onClick={suivant} alt="suivant" />
            </CarrouselControles>

            {/* Corps du carousel (image) */}
            <div>
                {pictures.map((p, index) => {
                    return (
                        <div key={index}>
                            {index === courante &&
                                <CarrouselItem >
                                    <CarrouselImage src={p} alt='Image logement'/>
                                    <CarrouselCaption>{index + 1} / {nbImages}</CarrouselCaption>
                                </CarrouselItem>
                            }
                        </div>
                    );
                })}
            </div>

        
        </CarrouselDiv>
    )
}
export default Carrousel;