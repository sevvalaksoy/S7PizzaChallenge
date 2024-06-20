import styled from "styled-components"

const Name = styled.p`
    font-family: "Barlow";
    font-size: 22px;
    font-weight: 600;
    color: #292929;
`
const Cover = styled.section`
    display: inline-block;
    width: 574px;
    text-align: left;
`
const Price = styled.div`
    font-family: "Barlow";
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 28px;
    align-items: center;
    color: #292929;
`
const Descrp = styled.p`
    font-family: "Barlow";
    font-size: 16px;
    font-weight: 400;
    color: #5F5F5F;
    width: 580px;
`
export default function Description (props) {
    const {initialPrice} = props;

    return (
        <Cover>
            <Name>Position Absolute Acı Pizza</Name>
            <Price>{initialPrice}₺
                <Price style={{fontWeight:"400", fontSize:"16px", color:"#5F5F5F"}}>4.9 <div style={{width:"100px"}}></div>(200)</Price>
            </Price>
            <Descrp>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. 
                Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, 
                daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, 
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . 
                Küçük bir pizzaya bazen pizzetta denir.
            </Descrp>
        </Cover>
    )
}