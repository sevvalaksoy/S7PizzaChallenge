import styled from "styled-components"

const Cover = styled.div`
    background: #CE2829;
    display: inline-block;
    width: 100%;
    background-size: cover;
    height: 100vh;
`

const Congrats = styled.h1`
    color: white;
    font-weight: 300;
    font-family: "Roboto Condensed";
    font-size: 86px;
`

const Container = styled.div`
    display: flex;
    width: 700px;
    height: 609px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 48px;
`

export default function Success () {

    return (
        <Cover>
            <section style={{display:"flex", justifyContent:"center", }}>
                <Container>
                    <img src="../../Assets/mile1-assets/logo.svg" style={{width:"360px", height:"45px"}}/>
                    <Congrats>TEBRİKLER!<br></br>SİPARİŞİNİZ ALINDI!</Congrats>
                </Container>
            </section>
        </Cover>
    )
}