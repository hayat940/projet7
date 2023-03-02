import React from 'react';
import { useState } from 'react';
import Styled from 'styled-components';

const Conteneur = Styled.div`
	margin-top: 30px;
	h5 {
		display: flex;
		justify-content: space-between;
		background-color: #FF6060;
		border-radius: 5px;
		color: #ffffff;
		padding: 10px 20px;
		font-size: 13px;
		font-weight: 500;
		cursor: pointer;
	}
	p {
		background-color: #F7F7F7;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		font-size: 11px;
		padding: 30px 18px 18px 18px;
	}
	@media (min-width: 768px) {
		h5, p {
			font-size: 24px;
		}
	}
`;


function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

	const handleClick = (event) => {
		setIsOpen(!isOpen);	// Inverse la valeur de isOpen (bascule)
	};

	// Contrôle de l'affichage du contenu
	let spanFleche;
	let pContenu;

	if (isOpen) {
		spanFleche = <span>&and;</span>;
		pContenu = <p style={{ display: 'block' }}>{children}</p>;
	} else {
		spanFleche = <span>&or;</span>;
		pContenu = <p style={{ display: 'none' }}>{children}</p>;
	}

	return (
        <Conteneur>                
    		<h5 onClick={handleClick}>
        		<span>{title}</span>
        		{spanFleche}
           	</h5> 
			{pContenu}
        </Conteneur>
	)
}

export default Accordion ;