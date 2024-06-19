import styled from "styled-components"
import Description from "../components/description"
import Header from "../components/header"
import Size from "../components/size"
import Ingridients from "../components/ingridients"
import Note from "../components/note"
import Total from "../components/total"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Finish = styled.footer`
    height: 100px;
`
export default function Order () {

    return (
        <Container>
            <Header/>
            <Description/>
            <Size/>
            <Ingridients/>
            <Note/>
            <Total/>
            <Finish/>
        </Container>
    )
}