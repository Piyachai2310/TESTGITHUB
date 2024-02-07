import { useState } from 'react';

// function content(){
//     const [sum , setSum] = useState(0);

//     // const setSum(() =>{
//     //     sum = sum + sum;
//     // });

//     const totalsum = () => {
//         setSum(sum + 1);
//     }
//     return(
//         <div className ="con">
//             <div className='Sumer'>Sum:{sum}</div>
//             <button onClick={totalsum}>กดเพิ่มค่า</button>
//         </div>
//     );
// }


function Content() {
    const [sum, setSum] = useState(0);
    //จะต้องมี 2 ตัวแปรที่รับคือ 
    // 1.ตัวแปรใช้ในการรับจาก HTML 
    // 2. ตัวฟังก์ชั่นที่ใช้ทำงาน

    const totalSum = (prop) => {
        setSum(sum + prop); // Assuming you want to increment sum by 1 on each click
    }

    return (
        <div className="con">
            <div className='Sumer'>Sum: {sum}</div>
            <button onClick={() => {totalSum(10)}}>กดเพิ่มค่า</button>
            {/*การใช้ onClick โดยจะมีการใส่พารามิเตอร์ที่ฟังก์ชั่นจะต้องมีการใส่ {() => {Myfunction()}}*/}
        </div>
    );
}

export default Content;
