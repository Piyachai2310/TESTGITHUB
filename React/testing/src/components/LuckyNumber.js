function LuckyNumber(props){
    return(
        <div>
            <h3>ตัวเลขของคุณ: {props.inputnum}</h3>
            <h3>ตัวเลขที่ถูกต้อง: {props.randomnum}</h3>
            <h1>{props.result}</h1>
        </div>
    );
}
export default LuckyNumber;