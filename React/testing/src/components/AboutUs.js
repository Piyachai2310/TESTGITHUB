function AboutUs(props){
    return (
        <div>
            <h2>จัดทำโดย {props.name}</h2>
            <h3>Email: {props.mail}</h3>
            <h3>Contact number: {props.tel}</h3>
        </div>
    );
}
export default AboutUs;