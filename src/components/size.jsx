import styled from "styled-components"

const Cover = styled.section`
    width: 580px;
    display: flex;
    font-family: "Barlow";
    justify-content: space-between;
`

export default function Size () {

    function handleChange (){
        //buraya setFormData gelecek
    }

    return (
        <Cover>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"1.5rem", color:"#5F5F5F", marginTop:"1.5rem", fontWeight:"500"}}>
                <p style={{fontFamily:"Barlow", fontSize:"20px", fontWeight:"600", color:"black", margin:"0"}}>Boyut Seç<i style={{color:"#D80027"}}>*</i></p>
                <label >
                    <input type="radio" name="Cornicione" value="küçük" onChange={handleChange}/>Küçük
                </label>
                <label>
                    <input type="radio" name="Cornicione" value="orta" onChange={handleChange}/>Orta
                </label>
                <label>
                    <input type="radio" name="Cornicione" value="büyük" onChange={handleChange}/>Büyük
                </label>
            </div>
            <div style={{marginTop:"1.5rem", marginRight:"9.5rem"}}>
                <p style={{fontFamily:"Barlow", fontSize:"20px", fontWeight:"600", color:"black", margin:"0", textAlign:"left"}}>Hamur Seç<i style={{color:"#D80027"}}>*</i></p>
                <select name="dough" onChange={handleChange} required style={{width:"150px", height:"20px", fontWeight:"bold"}}>
                    <option value="" disabled selected>Hamur Kalınlığı</option>
                    <option value="thin">İnce Hamur</option>
                    <option value="thinest">İncecik Hamur</option>
                    <option value="normal">Klasik Hamur</option>
                </select>
            </div>
        </Cover>
    )
}