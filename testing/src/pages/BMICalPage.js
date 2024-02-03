import BMIResult from "../components/BMIResult";
import { useState } from "react";

function BMICalPage() {

    const [ name,setName] = useState("");
    const [ bmiResult,setBmiResult] = useState(0);
    const [ translateResult,setTranslateResult] = useState("");

    const [ height,setHeight] = useState("");
    const [ weight,setWeight] = useState("");
    
    function calculateBMI() {
        let h = parseInt(height);
        let w = parseFloat(weight);
        let bmi = (w/(h/100*h/100));

        setBmiResult(bmi);
        if (bmi>25){
            setTranslateResult("อ้วนแล้ว");
        } else {
            setTranslateResult("น้อยกว่าคำว่าอ้วน");
        }
    }

    return(
        <div>
            <div align="left">
                <div align="center">
                    ยินดีต้อนรับสู่เว็บคำนวณ BMI
                    <hr/>

                        ชือ: <input type="text"
                             value={name}
                             onChange={ (e) => {setName(e.target.value);} } />    <br/>
                        ส่วนสูง: <input type="text"
                             value={ height }
                             onChange={ (e) => {setHeight(e.target.value);} } /> cm <br/>
                        น้ำหนัก: <input type="text"
                             value={ weight }
                             onChange={ (e) => {setWeight(e.target.value);} } /> kg <br/>

                    <button on onClick={ () => {calculateBMI(height,weight) } }> Calculate </button>
                    {    (bmiResult !== 0) &&
                        <div>
                            <hr/>

                            ผลการคำนวณ
                    
                            <BMIResult
                            name={name}
                            bmi={bmiResult}
                            result={translateResult}/>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
}

export default BMICalPage;