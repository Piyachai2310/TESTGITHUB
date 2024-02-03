function BMIResult (props) {
    return (
        <div>
            <h3> คุณ: { props.name } </h3>
            <h3> มีค่า BMI: {props.bmi} </h3>
            <h3> แปลผลได้ว่า: {props.result} </h3>
        </div>
    );
}

export default BMIResult;