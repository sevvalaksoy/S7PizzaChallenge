import styled from "styled-components"

const Name = styled.p`
    font-family: "Barlow";
    font-size: 22px;
    font-weight: 600;
    color: #292929;
`
const Cover = styled.section`
    display: flex;
    width: 100%;
    background-color: #FAF7F2;
    align-items: center;
    flex-direction: column;
`
const Price = styled.div`
    font-family: "Barlow";
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 28px;
    align-items: center;
    color: #292929;
    width: 100%;
`
const Descrp = styled.p`
    font-family: "Barlow";
    font-size: 16px;
    font-weight: 400;
    color: #5F5F5F;
    width: 580px;
    text-align: left;
`

export default function Description (props) {
    const {price} = props;

    return (
        <Cover>
            <img src={"/form-banner.png"}/>
            <div>
                <div style={{width:"607px", display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                    <p style={{fontFamily:"Barlow", fontSize:"16px", fontWeight:"500", color:"#5F5F5F"}}>Ana Sayfa - <span style={{color:"#CE2829"}}>Sipariş Oluştur</span></p>
                    <Name>Position Absolute Acı Pizza</Name>
                    <Price>{price}₺
                        <div style={{fontWeight:"400", fontSize:"16px", color:"#5F5F5F", display:"flex", justifyContent:"space-between", width:"30%", paddingRight:"2rem"}}>4.9 <span>(200)</span></div>
                    </Price>
                    <Descrp>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
                        Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, 
                        daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, 
                        genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
                        Küçük bir pizzaya bazen pizzetta denir.
                    </Descrp>
                </div>
            </div>
        </Cover>
    )
}