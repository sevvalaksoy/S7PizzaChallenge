import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import styled from "styled-components"
import OrderPrice from "./orderprice"

const Cover = styled.section`
    display: flex;
    width: 574px;
    justify-content: space-between;
    margin-top: 2rem;
    align-items: flex-start;
    margin-bottom: 10rem;
`
const DecreaseButton = styled.button`
    background-color: #FAF7F2;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    width: 47px;
    height: 56px;
`
const IncreaseButton = styled.button`
    background-color: #FAF7F2;
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

export default function Total (props) {

    const {price, formData, setFormData, isValid, count, setCount, setResponseData} = props;

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

    function handleSubmit (event) {
        event.preventDefault();
        if(!isValid) return;

        const URL = "https://reqres.in/api/pizza";
        axios.post(URL, formData).then((response)=>{
            console.log(response.data);
            setResponseData(response.data);
            history.push("/success");
        }).catch(()=> console.warn("İnternete bağlanılamadı."))
    }

    return (
        <Cover>
            <div style={{display:"flex", alignItems:"center", marginTop:"-1rem"}}>
                <DecreaseButton onClick={decrease}>-</DecreaseButton>
                <p style={{width:"46px", height:"55px", border:"1px, solid, #FAF7F2", alignItems:"center", display:"flex", justifyContent:"center", backgroundColor:"#FAF7F2"}}>{count}</p>
                <IncreaseButton onClick={increase}>+</IncreaseButton>
            </div>
            <div style={{marginRight:"-2rem"}}>
                <OrderPrice price={price} formData={formData} count={count}/>
                <OrderButton data-cy="submit-button" disabled={!isValid} onClick={handleSubmit} type="submit">SİPARİŞ VER</OrderButton>
            </div>
        </Cover>
    )
}
