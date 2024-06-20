import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
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
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    width: 47px;
    height: 56px;
`
const IncreaseButton = styled.button`
    background-color: #FDC913;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
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
const OrderPrice = styled.div`
    font-family: "Barlow";
    font-weight: 600;
    font-size: 18px;
    display: inline-block;
    width: 386px;
    height: 197px;
    border: 1px, solid, #D9D9D9;
    border-radius: 6px;
`

export default function Total (props) {

    const {price, formData, setFormData, initialData, isValid} = props;

    const [count, setCount] = useState(1);

    let selected = formData.malzemeler.length*5;

    let history = useHistory();

    if(count<=0){
        setCount(1);
    }
    function increase () {
        setCount(count +1);
        setFormData({...formData, adet:count+1});
    }
    function decrease () {
        setCount(count -1);
        setFormData({...formData, adet:count-1});
    }
    
    console.log(formData);

    function handleSubmit (event) {
        event.preventDefault();
        if(!isValid) return;

        const URL = "https://reqres.in/api/pizza";
        axios.post(URL, formData).then((response)=>{
            setFormData(initialData);
            console.log(response.data)
            history.push("/success");
        })
        console.log(formData);
    }

    return (
        <Cover>
            <div style={{display:"flex", alignItems:"center", marginTop:"-1rem"}}>
                <DecreaseButton onClick={decrease}>-</DecreaseButton>
                <p style={{width:"46px", height:"55px", border:"1px, solid, #D9D9D9", alignItems:"center", display:"flex", justifyContent:"center"}}>{count}</p>
                <IncreaseButton onClick={increase}>+</IncreaseButton>
            </div>
            <div style={{marginRight:"-2rem"}}>
                <OrderPrice>
                    <p style={{fontSize:"20px", color:"#292929", textAlign:"left", marginTop:"2.5rem", paddingLeft:"2.8rem"}}>Sipariş Toplamı</p>
                    <div style={{color:"#5F5F5F", display:"flex", justifyContent:"space-around", gap:"5rem"}}>
                        <p style={{margin:"0"}}>Seçimler</p>
                        <p style={{margin:"0"}}>{selected}₺</p>
                    </div>
                    <div style={{color:"#CE2829",display:"flex", justifyContent:"space-around", gap:"5.5rem"}}>
                        <p>Toplam</p>
                        <p>{(price+selected)*count}₺</p>
                    </div>
                </OrderPrice>
                <OrderButton disabled={!isValid} onClick={handleSubmit} type="submit">SİPARİŞ VER</OrderButton>
            </div>
        </Cover>
    )
}