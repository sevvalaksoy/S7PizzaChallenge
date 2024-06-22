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
                <div style={{display:"flex", justifyContent:"space-between", width:"1320px", padding:"6rem 0 3rem 0"}}>
                    <div style={{display:"flex", position:"relative", height:"350px"}}>
                        <img src="../../Assets/mile2-aseets/footer/logo-footer.svg" style={{position:"absolute", top:"0", left:"0"}}/>
                        <div style={{width:"305px",display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"end", gap:"2rem", height:"300px"}}>
                            <div style={{textAlign:"left", alignItems:"flex-start", display:"flex", gap:"1rem"}}>
                                <img src="../../Assets/mile2-aseets/footer/icons/icon-1.png" style={{width:"28px", height:"28px"}}/>
                                <span style={{fontFamily:"Barlow", fontWeight:"400", fontSize:"18px", color:"white"}}>341 Londonderry Road, <br/> Istanbul Türkiye </span>
                            </div>
                            <div style={{textAlign:"left", alignItems:"flex-start", display:"flex", gap:"1rem"}}>
                                <img src="../../Assets/mile2-aseets/footer/icons/icon-2.png" style={{width:"28px", height:"28px"}}/>
                                <span style={{fontFamily:"Barlow", fontWeight:"400", fontSize:"18px", color:"white"}}>aciktim@teknolojikyemekler.com </span>
                            </div>
                            <div style={{textAlign:"left", alignItems:"flex-start", display:"flex", gap:"1rem"}}>
                                <img src="../../Assets/mile2-aseets/footer/icons/icon-3.png" style={{width:"28px", height:"28px"}}/>
                                <span style={{fontFamily:"Barlow", fontWeight:"400", fontSize:"18px", color:"white"}}>+90 216 123 45 67 </span>
                            </div>
                        </div>
                        <div style={{fontFamily:"Barlow", fontWeight:"400", fontSize:"18px", color:"white", display:"flex", flexDirection:"column", textAlign:"left", height:"321px", justifyContent:"space-around"}}>
                            <h1 style={{fontSize:"24px", fontWeight:"500", textAlign:"center"}}>Sıccacık Menuler</h1>
                            <ul style={{listStyleType:"none"}}>
                                <p>Terminal Pizza</p>
                                <p>5 Kişilik Hackathlon Pizza</p>
                                <p>useEffect Tavuklu Pizza</p>
                                <p>Beyaz  Console Frosty</p>
                                <p>Testler Geçti Mutlu Burger</p>
                                <p>Position Absolute Acı Burger</p>
                            </ul>
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", width:"306px", height:"290px" }}>
                        <h1 style={{fontFamily:"Barlow", fontWeight:"500", fontSize:"24px", color:"white", textAlign:"left", paddingBottom:"1rem"}}>Instagram</h1>
                        <ul style={{listStyleType:"none", display:"flex", width:"100%", height:"100%", flexDirection:"column", flexWrap:"wrap", padding:"0"}}>
                            <li><img src="../../Assets/mile2-aseets/footer/insta/li-0.png"/></li>
                            <li><img src="../../Assets/mile2-aseets/footer/insta/li-1.png"/></li>
                            <li><img src="../../Assets/mile2-aseets/footer/insta/li-2.png"/></li>
                            <li><img src="../../Assets/mile2-aseets/footer/insta/li-3.png"/></li>
                            <li><img src="../../Assets/mile2-aseets/footer/insta/li-4.png"/></li>
                            <li><img src="../../Assets/mile2-aseets/footer/insta/li-5.png"/></li>
                        </ul>
                    </div>
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