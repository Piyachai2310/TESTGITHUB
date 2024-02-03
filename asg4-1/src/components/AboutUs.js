function AboutUs (props) {
    return (
        <div>
            <h2> จัดทำโดย: { props.name } </h2>
            <h3> email: {props.email} </h3>
            <h3> contact number: {props.contact} </h3>
        </div>
    );
    
}

export default AboutUs;