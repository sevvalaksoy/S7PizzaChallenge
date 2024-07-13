import styled from "styled-components"

const Head = styled.header`
    background: #CE2829;
    width: 100%;
    height: 101px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Header () {

    return (
            <Head>
                    <img src={"/logo.svg"} style={{width:"360px", height:"45px"}}/>
            </Head>
    )
}