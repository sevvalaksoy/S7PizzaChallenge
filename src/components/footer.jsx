import styled from "styled-components"

const FooterSection = styled.footer`
    width: 100%;
    background-color: #1A1A1A;
    height: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Footer () {

    return (
            <FooterSection>
                <img src="../../Assets/mile2-aseets/footer/logo-footer.svg"/>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div style={{borderTop:"1px solid #FFFFFF26", width:"100%", display:"flex", justifyContent:"center"}}>
                    <div style={{width:"1320px", display:"flex", justifyContent:"space-between"}}>
                        <p style={{fontFamily:"Barlow", fontWeight:"400", fontSize:"16px", color:"white"}}>© 2023 Teknolojik Yemekler.</p>
                        <ul>
                            <img src="../../Assets/mile2-aseets/footer/tw.png" style={{width:"18px", height:"15px"}}/>
                        </ul>
                    </div>
                </div>
            </FooterSection>
    )
}