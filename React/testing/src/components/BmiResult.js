function BmiResult(props){
    return(
        <div>
            <h2>คุณ {props.name}</h2>
            <h2>มีค่า BMI: {props.bmi}</h2>
            <h2>แปลผลได้ว่า: {props.result}</h2>
        </div>
    );
}
export default BmiResult;