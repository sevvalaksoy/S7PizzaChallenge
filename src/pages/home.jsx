import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import styled from "styled-components"

const Title = styled.h1`
    color: white;
    font-weight: 900;
    // font-family: Londrina Solid;
`
const Slogan = styled.p`
    color: white;
    font-size: 5rem;
    margin: 0;
    // font-family: Roboto Condensed;
    font-weight: 300;
`
const ButtonForm = styled.button`
    color: black;
    background-color: #FDC913;
    border-radius: 50px;
    width: 194px;
    height: 56px;
    // font-family: Barlow;
    font-weight: 600;
`

const Cover = styled.body`
    display: inline-block;
    width: 100%;
    background: url("../Assets/mile1-assets/home-banner.png");
    background-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
`

export default function Home () {

    let history = useHistory();

    function clickHandler () {
        history.push("/order");
    }

    return (
            <Cover>
                <Title>Teknolojik Yemekler</Title>
                <div>
                    <Slogan>KOD ACIKTIRIR, <br></br> PİZZA DOYURUR</Slogan>
                    <ButtonForm onClick={clickHandler}>ACIKTIM</ButtonForm>
                </div>
            </Cover>
    )
}