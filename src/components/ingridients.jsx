import styled from "styled-components";
import Check from "./check";

const Title = styled.p`
    font-family: "Barlow";
    font-weight: 600;
    font-size: 20px;
    text-align: left;
    color: #292929;
`
const Warning = styled.p`
    font-family: "Barlow";
    font-weight: 500;
    font-size: 16px;
    text-align: left;
    color: #5F5F5F;
    margin-bottom: 1.5rem;
`
const Cover = styled.section`
    display: inline-block;
    width: 574px;
    text-align: left;
    margin-top: 3rem;
`

let ings = [
    {
        value: "Pepperoni",
        label: "Pepperoni",
    },
    {
        value: "Tavuk-Izgara",
        label: "Tavuk Izgara",
    },
    {
        value: "Mısır",
        label: "Mısır",
    },
    {
        value: "Sarımsak",
        label: "Sarımsak",
    },
    {
        value: "Ananas",
        label: "Ananas",
    },
    {
        value: "Sosis",
        label: "Sosis",
    },
    {
        value: "Soğan",
        label: "Soğan",
    },
    {
        value: "Sucuk",
        label: "Sucuk",
    },
    {
        value: "Biber",
        label: "Biber",
    },
    {
        value: "Kabak",
        label: "Kabak",
    },
    {
        value: "Kanada-Jambonu",
        label: "Kanada Jambonu",
    },
    {
        value: "Domates",
        label: "Domates",
    },
    {
        value: "Jalepeno",
        label: "Jalepeno",
    },
    {
        value: "Zeytin",
        label: "Zeytin",
    },

]

export default function Ingridients (props) {

    const {setFormData, formData, errors, setErrors, errorMessages} = props;
    
    function handleChange (event){
        const {name, value} = event.target;
        let newValue;
        const oldValues = formData[name];
        if (oldValues.includes(value)){
            newValue = oldValues.filter((e)=>e!==value);
        } else {
            newValue = [...oldValues, value];
        }
        setFormData({...formData, [name]:newValue});

        let selected = newValue.length;

        if(selected<4 || selected>10) {
            setErrors({...errors, [name]:true})
        } else {
            setErrors({...errors, [name]:false})
        }
    }

    return (
        <Cover> 
            <Title>Ek Malzemeler</Title>
            <Warning>En fazla 10 malzeme seçebilirsiniz. 5₺</Warning>
            <div style={{color:"#5F5F5F", fontFamily:"Barlow", fontWeight:"700", fontSize:"16px", width:"600px", height:"320px",display:"flex", flexDirection:"column", flexWrap:"wrap", gap:"1rem"}}>
                {ings.map((ing, ind)=>{
                   return <Check changeFn={handleChange} value={ing.value} label={ing.label} test={ing.value+"-ing"} key={ind}/> 
                })}
            </div>
            <p style={{color:"red"}}>{errors.malzemeler && errorMessages.malzemeler}</p>
        </Cover>
    )
}