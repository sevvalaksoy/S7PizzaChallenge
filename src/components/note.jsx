import styled from "styled-components"

const Cover = styled.section`
    width: 574px;
    text-align: left;
    margin-top: 5rem;
`


export default function Note (props) {

    const {formData, setFormData, errors, setErrors, errorMessages} = props;

    function handleChange (event){
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
        if (name==="isim"){
            if(value.length>=3){
                setErrors({...errors, [name]:false});
            } else {
                setErrors({...errors, [name]:true});
            }
        }
    }
    
    return (
        <Cover>
            <label htmlFor="name" style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"20px", color:"#292929"}}>İsminiz:</label><br></br> 
            <input data-cy="name-input" type="text-area" id="name" name="isim" onChange={handleChange} value={formData.isim} placeholder="İsminizi giriniz." 
            style={{width:"554px", height:"56px", paddingLeft:"1rem", borderRadius:"6px", border:"1px, solid, gray", margin:"1.5rem 0"}}/>
            <p style={{color:"red", margin:"-.5rem 1rem 2rem"}}>{errors.isim && errorMessages.isim}</p>
            <label htmlFor="note" style={{fontFamily:"Barlow", fontWeight:"600", fontSize:"20px", color:"#292929"}}>Sipariş Notu</label><br></br>      
            <input type="text-area" id="note" name="not" onChange={handleChange} value={formData.not} placeholder="Siparişinize eklemek istediğniz bir not var mı?" 
            style={{width:"554px", height:"56px", paddingLeft:"1rem", borderRadius:"6px", border:"1px, solid, gray", marginTop:"1.5rem"}}/>    
            <hr style={{width:"100%", marginTop:"2rem"}}/>
        </Cover>
    )
}