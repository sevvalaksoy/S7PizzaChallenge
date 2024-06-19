import styled from "styled-components"

const Cover = styled.section`
    width: 574px;
    text-align: left;
    margin-top: 5rem;
`


export default function Note () {

    function handleChange (){
        //buraya setFormData gelecek
    }
    return (
        <Cover>
            <label htmlFor="note" style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"20px", color:"#292929"}}>Sipariş Notu</label><br></br>      
            <input type="text-area" id="note" name="note" onChange={handleChange} placeholder="Siparişinize eklemek istediğniz bir not var mı?" 
            style={{width:"554px", height:"56px", paddingLeft:"1rem", borderRadius:"6px", border:"1px, solid, gray", marginTop:"1.5rem"}}/>    
            <hr style={{width:"100%", marginTop:"2rem"}}/>
        </Cover>
    )
}