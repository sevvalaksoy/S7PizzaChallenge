import styled from "styled-components"

const Title = styled.h1`
    color: white;
    font-weight: 900;
    // font-family: Londrina Solid;
`
const Cover = styled.body`
    background: #CE2829;
    display: inline-block;
    width: 100%;
    background-size: cover;
    height: 100vh;
`

const Congrats = styled.h1`
    color: white;
    font-weight: 300;
    // font-family: Roboto Condensed;
`

const Container = styled.div`
    display: flex;
    width: 636px;
    height: 609px;
    flex-direction: column;
    justify-content: space-between;
`

export default function Success () {

    return (
        <Cover>
            <section style={{display:"flex", justifyContent:"center"}}>
                <Container>
                    <Title>Teknolojik Yemekler</Title>
                    <Congrats>TEBRİKLER!<br></br>SİPARİŞİNİZ ALINDI!</Congrats>
                </Container>
            </section>
        </Cover>
    )
}