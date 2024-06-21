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
            <div style={{color:"#5F5F5F", fontFamily:"Barlow", fontWeight:"700", fontSize:"16px", width:"586px", height:"214px",display:"flex", flexDirection:"column", flexWrap:"wrap", gap:"1rem"}}>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Pepperoni" data-cy="pep-ing" style={{marginRight:"1rem"}}/>Pepperoni
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Tavuk-Izgara" data-cy="tI-ing" style={{marginRight:"1rem"}}/>Tavuk Izgara
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Mısır" data-cy="mıs-ing" style={{marginRight:"1rem"}}/>Mısır
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Sarımsak" data-cy="sar-ing" style={{marginRight:"1rem"}}/>Sarımsak
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Ananas" style={{marginRight:"1rem"}}/>Ananas
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Sosis" style={{marginRight:"1rem"}}/>Sosis
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Soğan" style={{marginRight:"1rem"}}/>Soğan
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Sucuk" style={{marginRight:"1rem"}}/>Sucuk
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Biber" style={{marginRight:"1rem"}}/>Biber
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Kabak" style={{marginRight:"1rem"}}/>Kabak
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Kanada-Jambonu" style={{marginRight:"1rem"}}/>Kanada Jambonu
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Domates" style={{marginRight:"1rem"}}/>Domates
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Jalepeno" style={{marginRight:"1rem"}}/>Jalepeno
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="malzemeler" value="Zeytin" style={{marginRight:"1rem"}}/>Zeytin
                </label>
            </div>
            <p style={{color:"red"}}>{errors.malzemeler && errorMessages.malzemeler}</p>
        </Cover>
    )
}