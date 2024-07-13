import { Button, ButtonGroup } from "reactstrap";
import styled from "styled-components"

const Cover = styled.section`
    width: 607px;
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
                <ButtonGroup style={{display:"flex", gap:"1.5rem"}}>
                    <Button
                    name="boyut"
                    value="Küçük"
                    onClick={handleChange}
                    checked={formData.boyut==="Küçük"}  
                    active={formData.boyut==="Küçük"}   
                    style={{
                        backgroundColor: formData.boyut === 'Küçük' ? '#FFEECC' : '#FAF7F2',
                        width: '56px',
                        height: '56px',
                        borderRadius: '28px',
                        cursor: 'pointer',
                      }}           >
                    S
                    </Button> 
                    <Button
                    name="boyut" 
                    value="Orta" 
                    data-cy="orta-boy"
                    onClick={handleChange}
                    checked={formData.boyut==="Orta"} 
                    active={formData.boyut==="Orta"}   
                    style={{
                        backgroundColor: formData.boyut === 'Orta' ? '#FFEECC' : '#FAF7F2',
                        width: '56px',
                        height: '56px',
                        borderRadius: '28px',
                        cursor: 'pointer',
                      }}                >
                    M
                    </Button>
                    <Button
                    name="boyut"
                    value="Büyük"
                    onClick={handleChange}
                    checked={formData.boyut==="Büyük"} 
                    active={formData.boyut==="Büyük"}  
                    style={{
                        backgroundColor: formData.boyut === 'Büyük' ? '#FFEECC' : '#FAF7F2',
                        width: '56px',
                        height: '56px',
                        borderRadius: '28px',
                        cursor: 'pointer',
                      }}                >
                    L
                    </Button>
                </ButtonGroup>
            </div>
            <div style={{marginTop:"1.5rem"}}>
                <p style={{fontFamily:"Barlow", fontSize:"20px", fontWeight:"600", color:"#292929", textAlign:"left", marginTop:"0"}}>Hamur Seç<i style={{color:"#D80027"}}>*</i></p>
                <select data-cy="select-bar" value={formData.kalınlık} name="kalınlık" onChange={handleChange} 
                style={{width:"283px", height:"56px", backgroundColor:"#FAF7F2", borderRadius:"6px", border:"0px", padding:"0 2rem", appearance:"none", cursor:"pointer"}}>
                    <option value="inital" style={{fontWeight:"500",fontSize:"14px",color:"#5F5F5F", fontFamily:"Barlow"}}>-Hamur Kalınlığı Seç-</option>
                    <option value="İnce" style={{fontWeight:"500",fontSize:"14px",color:"#5F5F5F", fontFamily:"Barlow",}}>İnce Hamur</option>
                    <option value="İncecik" style={{fontWeight:"500",fontSize:"14px",color:"#5F5F5F", fontFamily:"Barlow",}}>İncecik Hamur</option>
                    <option value="Klasik" style={{fontWeight:"500",fontSize:"14px",color:"#5F5F5F", fontFamily:"Barlow",}}>Klasik Hamur</option>
                </select>
                <img src={"/down-arrow.png"} style={{width:"15px", height:"15px", marginLeft:"-2rem", marginBottom:"-0.2rem"}}/>
            </div>
        </Cover>
    )
}