// Composant page d'accueil
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../datas/logements.json";
import Styled from "styled-components";

const SectionLocations = Styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap ;
    row-gap: 20px;
    margin-top: 20px;
    @media (min-width: 768px) {
        background: #F7F7F7;
        border-radius: 25px;
        padding: 56px 50px;
        margin-top: 40px;
        row-gap: 40px;
    }
`;

function Home() {
    return (
        <div>
            <Banner imageUrl={'accueil.jpg'} opacite={0.3}><p>Chez vous, <br />partout et ailleurs</p></Banner>
            <SectionLocations>
                {
                    logements.map(function(item, i){
                        console.log('test');
                        return <Card key={i} titre={item.title} cover={item.cover} id={item.id}></Card>
                    })

                }
            </SectionLocations>
        </div>
    );
}

export default Home;