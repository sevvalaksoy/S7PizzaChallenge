import styled from "styled-components"

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
const CheckboxInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 45px;
  height: 45px;
  border: 0;
  border-radius: 6px;
  margin-right: 1rem;
  outline: none;
  cursor: pointer;
  background-color: #FAF7F2;
  position: relative;

  &:checked {
    background-color: #FDC913;
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 29px;
    background-color: transparent;
    border-radius: 3px;
    visibility: hidden;
  }
  &:checked::before {
    visibility: visible;
  }
  &:checked::after {
    content: "✔";
    position: absolute;
    font-family: "Barlow";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    font-weight: 200;
    color: black;
  }
`

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
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Pepperoni" checked={formData.malzemeler.includes("Pepperoni")}  data-cy="pep-ing"/>Pepperoni
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Tavuk-Izgara" data-cy="tI-ing" />Tavuk Izgara
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Mısır" data-cy="mıs-ing" />Mısır
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Sarımsak" data-cy="sar-ing" />Sarımsak
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Ananas" />Ananas
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Sosis" />Sosis
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Soğan" />Soğan
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Sucuk" />Sucuk
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Biber" />Biber
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Kabak" />Kabak
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Kanada-Jambonu" />Kanada Jambonu
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Domates" />Domates
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Jalepeno" />Jalepeno
                </label>
                <label className="ingredients" style={{display:"flex", alignItems:"center", cursor:"pointer"}}>
                    <CheckboxInput type="checkbox" onChange={handleChange} name="malzemeler" value="Zeytin" />Zeytin
                </label>
            </div>
            <p style={{color:"red"}}>{errors.malzemeler && errorMessages.malzemeler}</p>
        </Cover>
    )
}