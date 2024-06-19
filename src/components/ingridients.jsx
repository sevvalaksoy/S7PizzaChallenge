import styled from "styled-components"

const Title = styled.p`
    font-family: "Barlow";
    font-weight: 600;
    font-size: 20px;
    text-align: left;
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

export default function Ingridients () {

    function handleChange (){
        //buraya setFormData gelecek
    }

    return (
        <Cover>
            <Title>Ek Malzemeler</Title>
            <Warning>En fazla 10 malzeme seçebilirsiniz. 5₺</Warning>
            <div style={{color:"#5F5F5F", fontFamily:"Barlow", fontWeight:"700", fontSize:"16px", width:"586px", height:"214px",display:"flex", flexDirection:"column", flexWrap:"wrap", gap:"1rem"}}>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="pepperoni"/>Pepperoni
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="tavukIzgara"/>Tavuk Izgara
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="mısır"/>Mısır
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="sarımsak"/>Sarımsak
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="ananas"/>Ananas
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="sosis"/>Sosis
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="soğan"/>Soğan
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="sucuk"/>Sucuk
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="biber"/>Biber
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="kabak"/>Kabak
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="kanadaJambonu"/>Kanada Jambonu
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="domates"/>Domates
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="jalepeno"/>Jalepeno
                </label>
                <label className="ingredients">
                    <input type="checkbox" onChange={handleChange} name="ingredients" value="zeytin"/>Zeytin
                </label>
            </div>
        </Cover>
    )
}