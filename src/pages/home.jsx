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
const Dontmiss = styled.p`
    color: #FDC913;
    font-family: "Satisfy";
    font-weight: 400;
    font-size: 32px;
    margin-bottom: -1.5rem;
`
const Barmenu = styled.section`
    width: 100%;
    background-color: white;
    height: 100px;
`
const Titles = styled.p`
    font-family: "Barlow";
    font-weight: 500;
    color: #292929;
    font-size: 18px;
    display: inline;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    &:hover {
        cursor: pointer;
        background-color: #FAF7F2;
        border-radius: 60px;
        padding: 0 1rem;
    }
`

export default function Home () {

    let history = useHistory();

    function clickHandler () {
        history.push("/order");
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <Cover>
                <div style={{margin:"3rem 0"}}>
                <img src="../../Assets/mile1-assets/logo.svg"/>
                </div>
                <div>
                    <Dontmiss>fırsatı kaçırma</Dontmiss>
                    <Slogan>KOD ACIKTIRIR <br></br> PİZZA, DOYURUR</Slogan>
                    <ButtonForm onClick={clickHandler} data-cy="acıktım-button">ACIKTIM</ButtonForm>
                </div>
            </Cover>
            <Barmenu>
                <ul style={{display:"flex", alignItems:"center", justifyContent:"space-around", margin:"1rem 10rem", padding:"0"}}>
                    <Menu>
                        <img src="../../Assets/mile2-aseets/icons/1.svg"/>
                        <Titles>YENİ! Kore</Titles>
                    </Menu>
                    <Menu>
                        <img src="../../Assets/mile2-aseets/icons/2.svg"/>
                        <Titles>Pizza</Titles>
                    </Menu>
                    <Menu>
                        <img src="../../Assets/mile2-aseets/icons/3.svg"/>
                        <Titles>Burger</Titles>
                    </Menu>
                    <Menu>
                        <img src="../../Assets/mile2-aseets/icons/4.svg"/>
                        <Titles>Kızartmalar</Titles>
                    </Menu>
                    <Menu>
                        <img src="../../Assets/mile2-aseets/icons/5.svg"/>
                        <Titles>Fast food</Titles>
                    </Menu>
                    <Menu>
                        <img src="../../Assets/mile2-aseets/icons/6.svg"/>
                        <Titles>Gazlı İçecek</Titles>
                    </Menu>
                </ul>
            </Barmenu>
            <div style={{width:"1320px", height:"560px", background:"red"}}>
                <div style={{width:"636px", height:"100%"}}>
                    <div style={{width:"263px", height:"300px", margin:"3rem 4rem", display:"flex", flexDirection:"column"}}>
                        <h1 style={{fontFamily:"Quattrocento", fontWeight:"600", fontSize:"68px", color:"white", textAlign:"left", margin:"0"}}>Özel Lezzetus</h1>
                        <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"20px", color:"white"}}>Position: Absolute Acı Burger</p>
                        <button style={{backgroundColor:"white", color:"#CE2829", fontFamily:"Barlow", fontWeight:"600", fontSize:"14px", borderRadius:"50px", width:"138px", height:"48px"}}>SİPARİŞ VER</button>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}