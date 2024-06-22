import styled from "styled-components"

const Container = styled.div`
    font-family: "Barlow";
    font-weight: 600;
    font-size: 18px;
    display: inline-block;
    width: 386px;
    height: 197px;
    border: 1px, solid, #FAF7F2;
    border-radius: 6px;
    background-color: #FAF7F2;
`

export default function OrderPrice (props){
    
    const {price, count, formData} = props;

    let selected = formData.malzemeler.length*5;

    return (
        <Container>
                    <p style={{fontSize:"20px", color:"#292929", textAlign:"left", marginTop:"2.5rem", paddingLeft:"2.8rem"}}>Sipariş Toplamı</p>
                    <div style={{color:"#5F5F5F", display:"flex", justifyContent:"space-around", gap:"5rem"}}>
                        <p style={{margin:"0"}}>Seçimler</p>
                        <p style={{margin:"0"}}>{selected}₺</p>
                    </div>
                    <div style={{color:"#CE2829",display:"flex", justifyContent:"space-around", gap:"5.5rem"}}>
                        <p>Toplam</p>
                        <p>{(price+selected)*count}₺</p>
                    </div>
        </Container>
    )
}