import styled from "styled-components"
import Description from "../components/description"
import Header from "../components/header"
import Size from "../components/size"
import Ingridients from "../components/ingridients"
import Note from "../components/note"
import Total from "../components/total"
import { useEffect, useState } from "react"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Finish = styled.footer`
    height: 100px;
`

const initialData = {
    isim: "",
    adet: 1,
    boyut: "",
    kalınlık: "",
    malzemeler: [],
    not: "",
}

const errorMessages = {
    isim: "En az 3 karakter giriniz!",
    malzemeler: "En az 4 en fazla 10 adet seçiniz!"
}

let initialPrice = 85.50;

export default function Order () {
    const [price] = useState(initialPrice);
    const [formData, setFormData] = useState(initialData);
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
            <Description initialPrice={initialPrice}/>
            <Size setFormData={setFormData} formData={formData}/>
            <Ingridients setFormData={setFormData} formData={formData} setErrors={setErrors} errors={errors} errorMessages={errorMessages}/>
            <Note setFormData={setFormData} formData={formData} setErrors={setErrors} errors={errors} errorMessages={errorMessages}/>
            <Total price={price} setFormData={setFormData} formData={formData} initialData={initialData} isValid={isValid}/>
            <Finish/>
        </Container>
    )
}