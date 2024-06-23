import styled from "styled-components"
import Description from "../components/description"
import Header from "../components/header"
import Size from "../components/size"
import Ingridients from "../components/ingridients"
import Note from "../components/note"
import Total from "../components/total"
import { useEffect, useState } from "react"
import Footer from "../components/footer"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const errorMessages = {
    isim: "En az 3 karakter giriniz!",
    malzemeler: "En az 4 en fazla 10 adet seçiniz!"
}

export default function Order (props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        setFormData(initialData);
        setCount(1);
      }, []);
    
    const {price, formData, setFormData, count, setCount, initialData, setResponseData} = props;
    const [errors, setErrors] = useState({
        isim: false,
        malzemeler: false,
        boyut: false,
        kalınlık: false,
    });
    const [isValid, setIsValid] = useState(false);

    useEffect(()=>{
        if (formData.isim.length>=3 && formData.malzemeler.length>=4 && formData.malzemeler.length<=10 && formData.kalınlık && formData.boyut) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }),[formData];

    return (
        <Container>
            <Header/>
            <Description price={price}/>
            <Size setFormData={setFormData} formData={formData}/>
            <Ingridients setFormData={setFormData} formData={formData} setErrors={setErrors} errors={errors} errorMessages={errorMessages}/>
            <Note setFormData={setFormData} formData={formData} setErrors={setErrors} errors={errors} errorMessages={errorMessages}/>
            <Total price={price} setFormData={setFormData} formData={formData} initialData={initialData} isValid={isValid} count={count} setCount={setCount} setResponseData={setResponseData}/>
            <Footer/>
        </Container>
    )
}