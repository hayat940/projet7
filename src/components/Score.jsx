import React from 'react';
import Styled from 'styled-components';

// &#9734; = etoile blanche
// &#9733; = etoile pleine

const DivScore = Styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
   
    width: 100%;
    @media (min-width: 768px) {
        justify-content: flex-end;
        font-size: 24px;
    }
`;


function Score({ rating }) {

    console.log(rating);

    const stars = [1, 2, 3, 4, 5];
     
    return (
        <DivScore>
            {
                stars.map((star, index) => 
                    star <= rating ? (
                        <span key={index}>&#9733;</span>
                    ) : (
                        <span key={index}>&#9734;</span>
                    )
                )
            }

        </DivScore>      
    );
  }
  
  export default Score;
