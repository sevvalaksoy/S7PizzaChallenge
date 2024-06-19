import styled from "styled-components"

const Head = styled.header`
    background: #CE2829;
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`
const MainPage = styled.p`
    color: white;
    font-family: "Barlow";
    font-weight: 400;
`
const OrderIt = styled.p`
    color: white;
    font-family: "Barlow";
    font-weight: 700;
`

export default function Header () {

    return (
            <Head>
                <div style={{width:"574px", height:"210px", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
                    <img src="../../Assets/mile1-assets/logo.svg" style={{width:"360px", height:"45px", marginTop:"21px"}}/>
                    <div style={{display:"flex", justifyContent:"flex-start", width:"100%", marginBottom:"-20px"}}>
                        <MainPage>Anasayfa - <span style={{color:"#CE2829"}}>{" ı"}</span></MainPage>
                        <OrderIt>Sipariş Oluştur</OrderIt>
                    </div>
                </div>
            </Head>
    )
}