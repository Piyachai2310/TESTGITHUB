import BmiResult from "../components/BmiResult";
import './BmiCalPage.css'
import { useState } from 'react';
function BmiCalPage(){
    const [name, setName] = useState("ปวริศ แจ่มจันทา");
    const [bmiResult, setbmiResult] = useState(0);
    const [translateResult, settranslateResult] = useState("สมส่วน");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    function calculateBMI() {
        let h = parseInt(height);
        let w = parseFloat(weight);
        let bmi = w / (h / 100 * h / 100);
        setbmiResult(bmi);
        if (bmi > 25) {
            settranslateResult("อ้วน")
        }
        else {
            settranslateResult("น้อยกว่าคำว่าอ้วน")
        }
    }
    return(
        <div className="bodyBmiCalPage">
            <div align="left">
                <div align="center" className="divBmi">
                    <h2 id="top">ยินดีต้อนรับสู่หน้าคำนวณ BMI</h2>
                    <hr />
                    ชื่อ <br /> <input type="text"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} /><br />
                    ส่วนสูง(ซม.) <br /> <input type="text"
                        value={height}
                        onChange={(e) => { setHeight(e.target.value) }} /> <br />
                    น้ำหนัก(ก.ก) <br /> <input type="text"
                        value={weight}
                        onChange={(e) => { setWeight(e.target.value) }} /> <br /><br />
                    <button onClick={() => { calculateBMI() }}> Calculate </button> <br /><br />
                    <hr />
                    คำนวณตรงนี้<br />
                    ชื่อ: {name} <br />
                    ส่วนสูง: {height} <br />
                    น้ำหนัก: {weight}
                    {
                        (bmiResult != 0) &&
                        <div>
                            <hr />
                            <h2>ผลการคำนวณ</h2>
                            <BmiResult name={name}
                                bmi={bmiResult}
                                result={translateResult} /><hr />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default BmiCalPage;