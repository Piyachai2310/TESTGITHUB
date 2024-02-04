import LuckyNumber from "../components/LuckyNumber";
import { useState } from 'react';
import './LuckyNumberPage.css';
function LuckyNumberPage() {
    const [inputnum, setinputnum] = useState("");
    const [randomnum, setrandomnum] = useState(0);
    const [result, setResult] = useState("");
    function Random() {
        const random = Math.floor(Math.random() * 800) + 100;
        setrandomnum(random);
        if (random == inputnum) {
            setResult("งดคลาส");
        }
        else {
            setResult("มาเรียน web pro กัน");
        }
    }
    return (
        <div className="luckybody">
            <div align="center">
                <h1>ยินดีต้อนรับสู่หน้า LuckyNumber ของเรา</h1>
                <hr />
                <h2>กรุณาท้ายตัวเลขที่ต้องการ ระหว่าง 100 - 900</h2>
                <h3>ใส่ตัวเลขในช่องนี้: <input type="text" value={inputnum}
                    onChange={(e) => { setinputnum(e.target.value) }}></input></h3 >
                <button onClick={() => { Random() }}> ทาย</button> <br /><br />
                {
                    (randomnum != 0) &&
                    <div className="containresult">
                        <LuckyNumber inputnum={inputnum}
                                    randomnum={randomnum} />
                        <div className="result">{result}</div>
                    </div>
                    
                }
                
            </div>


        </div>
    );
}
export default LuckyNumberPage;