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
    background: url("../../Assets/mile1-assets/home-banner.png");
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
    font-size: 18px;
    display: inline;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    color: #292929;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 60px;
    width: 186px;
    height: 80px;

    &:hover {
        cursor: pointer;
        background-color: #292929;
        color: white;
        border-radius: 60px;
        padding: 0 1rem;
    }
`
const FirstDiv = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 12px;
    background: url("../../Assets/mile2-aseets/cta/kart-1.png");
    background-size: cover;
    background-repeat: no-repeat;
`
const SipVerButton = styled.button`
    font-family: "Barlow";
    font-weight: 600;
    font-size: 14px;
    border-radius: 50px;
    width: 138px;
    height: 45px;
    color: #CE2829;
    background-color: white;
`
const SecondDiv = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 12px;
    background: url("../../Assets/mile2-aseets/cta/kart-2.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
`
const ThirdDiv = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 12px;
    background: url("../../Assets/mile2-aseets/cta/kart-3.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
`
const Options = styled.div`
    width: 1320px;
    height: 778px;
    margin: 8rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Card = styled.div`
    width: 416px;
    height: 440px;
    border-radius: 12px;
    background-color: white;

    &:hover {
        cursor: pointer;
        transform: scale(1.05)
    }
`

export default function Home () {

    let history = useHistory();

    function clickHandler () {
        history.push("/order");
    }

    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", backgroundColor:"#FAF7F2"}}>
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
            <div style={{width:"1320px", height:"560px", display:"flex", gap:"2rem", marginTop:"6rem"}}>
                <FirstDiv>
                    <div style={{width:"263px", height:"300px", margin:"0", display:"flex", flexDirection:"column", padding:"3rem"}}>
                        <h1 style={{fontFamily:"Quattrocento", fontWeight:"600", fontSize:"68px", color:"white", textAlign:"left", margin:"0"}}>Özel Lezzetus</h1>
                        <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"20px", color:"white"}}>Position: Absolute Acı Burger</p>
                        <SipVerButton onClick={clickHandler}>SİPARİŞ VER</SipVerButton>
                    </div>
                </FirstDiv>
                <div style={{display:"flex", flexDirection:"column", width:"50%", gap:"2rem"}}>
                    <SecondDiv>
                        <div style={{display:"flex", flexDirection:"column", padding:"3rem", width:"260px", height:"160px", gap:"2rem"}}>
                            <h1 style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"32px", color:"white", textAlign:"left", margin:"0"}}>Hackathlon Burger Menü</h1>
                            <SipVerButton onClick={clickHandler}>SİPARİŞ VER</SipVerButton>
                        </div>
                    </SecondDiv>
                    <ThirdDiv>
                        <div style={{display:"flex", flexDirection:"column", padding:"3rem", width:"260px", height:"160px", gap:"2rem"}}>
                            <h1 style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"32px", color:"#292929", textAlign:"left", margin:"0"}}><span style={{color:"#D80027"}}>Çoooook</span> hızlı <br></br>npm gibi kurye</h1>
                            <SipVerButton onClick={clickHandler}>SİPARİŞ VER</SipVerButton>
                        </div>
                    </ThirdDiv>
                </div>
            </div>
            <Options>
                <p style={{fontFamily:"Satisfy", fontSize:"32px", fontWeight:"400", color:"#CE2829"}}>en çok paketlenen menüler</p>
                <p style={{fontFamily:"Barlow", fontSize:"42px", fontWeight:"600", color:"#292929"}}>Acıktıran Kodlara Doyuran Lezzetler</p>
                <Barmenu style={{backgroundColor:"#FAF7F2"}}>
                    <ul style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <Menu>
                            <img src="../../Assets/mile2-aseets/icons/1.svg"/>
                            <Titles>Ramen</Titles>
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
                            <Titles>French fries</Titles>
                        </Menu>
                        <Menu>
                            <img src="../../Assets/mile2-aseets/icons/5.svg"/>
                            <Titles>Fast food</Titles>
                        </Menu>
                        <Menu>
                            <img src="../../Assets/mile2-aseets/icons/6.svg"/>
                            <Titles>Soft drinks</Titles>
                        </Menu>
                    </ul>
                </Barmenu>
                <div style={{width:"100%", display:"flex", justifyContent:"space-around", margin:"2rem"}}>
                    <Card onClick={clickHandler}>
                        <img src="../../Assets/mile2-aseets/pictures/food-1.png"/>
                        <div>
                            <p style={{fontFamily:"Barlow", fontSize:"22px", fontWeight:"600", textAlign:"left", padding:"0 2rem", margin:"0"}}>Terminal Pizza</p>
                            <div style={{display:"flex", justifyContent:"space-between", padding:"0 2rem"}}>
                                <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"16px", color:"#1B1B1BB2"}}>4.9</p>
                                <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"16px", color:"#1B1B1BB2"}}>(200)</p>
                                <p style={{fontFamily:"Barlow", fontWeight:"700", fontSize:"20px", color:"#292929"}}>60₺</p>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={clickHandler}>
                        <img src="../../Assets/mile2-aseets/pictures/food-2.png"/>
                        <div>
                            <p style={{fontFamily:"Barlow", fontSize:"22px", fontWeight:"600", textAlign:"left", padding:"0 2rem", margin:"0"}}>Position Absolute Acı Pizza</p>
                            <div style={{display:"flex", justifyContent:"space-between", padding:"0 2rem"}}>
                                <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"16px", color:"#1B1B1BB2"}}>4.9</p>
                                <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"16px", color:"#1B1B1BB2"}}>(928)</p>
                                <p style={{fontFamily:"Barlow", fontWeight:"700", fontSize:"20px", color:"#292929"}}>85₺</p>
                            </div>
                        </div>
                    </Card>
                    <Card onClick={clickHandler}>
                        <img src="../../Assets/mile2-aseets/pictures/food-3.png"/>
                        <div>
                            <p style={{fontFamily:"Barlow", fontSize:"22px", fontWeight:"600", textAlign:"left", padding:"0 2rem", margin:"0"}}>useEffect Tavuklu Burger</p>
                            <div style={{display:"flex", justifyContent:"space-between", padding:"0 2rem"}}>
                                <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"16px", color:"#1B1B1BB2"}}>4.9</p>
                                <p style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"16px", color:"#1B1B1BB2"}}>(462)</p>
                                <p style={{fontFamily:"Barlow", fontWeight:"700", fontSize:"20px", color:"#292929"}}>75₺</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Options>
            <footer style={{width:"100%", backgroundColor:"#1A1A1A", height:"560px"}}>

            </footer>
        </div>
    )
}