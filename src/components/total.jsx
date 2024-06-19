import { useState } from "react"
import styled from "styled-components"

const Cover = styled.section`
    display: flex;
    width: 574px;
    justify-content: space-between;
    margin-top: 2rem;
    align-items: flex-start;
`
const DecreaseButton = styled.button`
    background-color: #FDC913;
    border-radius: 6px;
    width: 47px;
    height: 56px;
`
const IncreaseButton = styled.button`
    background-color: #FDC913;
    border-radius: 6px;
    width: 47px;
    height: 56px;
`
const OrderButton = styled.button`
    background-color: #FDC913;
    border-radius: 6px;
    width: 386px;
    height: 62px;
    font-family: "Barlow";
    font-size: 18px;
    font-weight: 600;
    margin-top: -.2rem;
`

export default function Total () {

    const [count, setCount] = useState(1);

    function increase () {
        setCount(count +1)
    }
    function decrease () {
        setCount(count -1)
    }

    return (
        <Cover>
            <div style={{display:"flex", alignItems:"center", marginTop:"-1rem"}}>
                <DecreaseButton onClick={increase}>-</DecreaseButton>
                <p style={{width:"46px", height:"55px", border:"1px, solid, #D9D9D9", alignItems:"center", display:"flex", justifyContent:"center"}}>{count}</p>
                <IncreaseButton onClick={decrease}>+</IncreaseButton>
            </div>
            <div >
                <div style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"18px", display:"inline-block", width:"386px", height:"197px", border:"1px, solid, #D9D9D9", borderRadius:"6px"}}>
                    <p style={{fontSize:"20px", color:"#292929", textAlign:"left", marginTop:"2.5rem", paddingLeft:"2.8rem"}}>Sipariş Toplamı</p>
                    <div style={{color:"#5F5F5F", display:"flex", justifyContent:"space-around", gap:"5rem"}}>
                        <p style={{margin:"0"}}>Seçimler</p>
                        <p style={{margin:"0"}}>25.00₺</p>
                    </div>
                    <div style={{color:"#CE2829",display:"flex", justifyContent:"space-around", gap:"5.5rem"}}>
                        <p>Toplam</p>
                        <p>115.00₺</p>
                    </div>
                </div>
                <OrderButton>SİPARİŞ VER</OrderButton>
            </div>
        </Cover>
    )
}