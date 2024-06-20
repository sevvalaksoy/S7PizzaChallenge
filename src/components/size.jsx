import styled from "styled-components"

const Cover = styled.section`
    width: 580px;
    display: flex;
    font-family: "Barlow";
    justify-content: space-between;
`

export default function Size (props) {

    const {formData, setFormData} = props;

    function handleChange (event){
        const {name, value} = event.target;
            setFormData({ ...formData, [name]:value});
    }
    return (
        <Cover>
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"1rem", color:"#5F5F5F", marginTop:"1.5rem", fontWeight:"500"}}>
                <p style={{fontFamily:"Barlow", fontSize:"20px", fontWeight:"600", color:"#292929", margin:"0"}}>Boyut Seç<i style={{color:"#D80027"}}>*</i></p>
                <label >
                    <input type="radio" name="boyut" value="küçük" onChange={handleChange} checked={formData.boyut==="küçük"} style={{marginRight:"1rem"}}/>Küçük
                </label>
                <label>
                    <input type="radio" name="boyut" value="orta" onChange={handleChange} checked={formData.boyut==="orta"} style={{marginRight:"1rem"}}/>Orta
                </label>
                <label>
                    <input type="radio" name="boyut" value="büyük" onChange={handleChange} checked={formData.boyut==="büyük"} style={{marginRight:"1rem"}}/>Büyük
                </label>
            </div>
            <div style={{marginTop:"1.5rem", marginRight:"9.5rem"}}>
                <p style={{fontFamily:"Barlow", fontSize:"20px", fontWeight:"600", color:"#292929", margin:"0", textAlign:"left"}}>Hamur Seç<i style={{color:"#D80027"}}>*</i></p>
                <select value={formData.kalınlık} name="kalınlık" onChange={handleChange} required style={{width:"150px", height:"20px", fontWeight:"bold"}}>
                    <option value="" disabled selected>Hamur Kalınlığı</option>
                    <option value="ince">İnce Hamur</option>
                    <option value="incecik">İncecik Hamur</option>
                    <option value="klasik">Klasik Hamur</option>
                </select>
            </div>
        </Cover>
    )
}