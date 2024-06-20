import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import styled from "styled-components"

const Slogan = styled.p`
    color: white;
    font-size: 5rem;
    margin: 0;
    font-family: "Roboto Condensed";
    font-weight: 300;
`
const ButtonForm = styled.button`
    color: #292929;
    background-color: #FDC913;
    border-radius: 50px;
    width: 194px;
    height: 56px;
    font-family: "Barlow";
    font-weight: 600;
`

const Cover = styled.div`
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
                <img src="../../Assets/mile1-assets/logo.svg" style={{marginTop:"116px"}}/>
                <div>
                    <Slogan>KOD ACIKTIRIR <br></br> PİZZA, DOYURUR</Slogan>
                    <ButtonForm onClick={clickHandler}>ACIKTIM</ButtonForm>
                </div>
            </Cover>
    )
}