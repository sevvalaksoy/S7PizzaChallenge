import styled from "styled-components"

const Cover = styled.div`
    background: #CE2829;
    display: inline-block;
    width: 100%;
    background-size: cover;
    height: 100%;
`

const Congrats = styled.h1`
    color: white;
    font-weight: 300;
    font-family: "Roboto Condensed";
    font-size: 86px;
    margin: 0;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const OnWay = styled.p`
    color: #FDC913;
    font-family: "Satisfy";
    font-weight: 400;
    font-size: 32px;
    margin: 0;
`
const Name = styled.p`
    font-family: "Barlow";
    font-size: 22px;
    font-weight: 600;
    color: #FFFFFF;
`
const sizes = {
    küçük: "S",
    orta: "M",
    büyük: "L",
}

const In = styled.span`
    font-weight: 700;
`
const Box = styled.div`
    border: 1px, solid, #FAF7F2;
    border-radius: 6px;
    width: 288px;
    height: 195px;
    font-family: "Barlow";
    color: white;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function Success (props) {

    const {responseData} = props;

    window.scrollTo(0,0);
   
    return (
        <Cover>
            <section style={{display:"flex", justifyContent:"center"}}>
                <Container>
                    <div style={{margin:"3rem 0"}}>
                    <img src="../../Assets/mile1-assets/logo.svg" style={{width:"360px", height:"45px"}}/>
                    </div>
                    <OnWay>lezzetin yolda</OnWay>
                    <Congrats>SİPARİŞ ALINDI</Congrats>
                    <hr style={{width:"580px", marginTop:"2rem"}}/>
                    <Name>Position Absolute Acı Pizza</Name>
                    <div style={{width:"200px", textAlign:"left", fontFamily:"Barlow", fontSize:"16px", fontWeight:"400", color:"white", margin:"2rem 0"}}>
                        <p>İsim: <In>{responseData.isim}</In></p>
                        <p>Adet: <In>{responseData.adet}</In></p>
                        <p>Boyut: <In>{responseData.boyut==="Orta" && sizes.orta}</In><In>{responseData.boyut==="Küçük" && sizes.küçük}</In><In>{responseData.boyut==="Büyük" && sizes.büyük}</In></p>
                        <p>Hamur: <In>{responseData.kalınlık}</In></p>
                        <p>Ek Malzeler: <In>{responseData.malzemeler.map((malzeme)=>malzeme.toString()+", ")}</In></p>
                        <p>Not: <In>{responseData.not}</In></p>
                    </div>
                    <Box>
                        <p style={{fontSize:"20px", textAlign:"left", width:"155px"}}>Sipariş Toplamı</p>
                        <div style={{display:"flex", justifyContent:"space-around", gap:"4rem"}}>
                            <p>Seçimler</p>
                            <p>25₺</p>
                        </div>
                        <div style={{display:"flex", justifyContent:"space-around", gap:"4rem"}}>
                            <p>Toplam</p>
                            <p>115₺</p>
                        </div>
                    </Box>
                    <footer style={{height:"100px"}}></footer>
                </Container>
            </section>
        </Cover>
    )
}
