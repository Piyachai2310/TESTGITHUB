import AboutUs from "../components/AboutUs";

function AboutUsPage(){
    return (
        <div>
            <div align="center">
                <h2> คณะผู้จัดทำ </h2>
                <AboutUs name="Suttipoj"
                    email="6510210338@psu.ac.th"
                    contact="091-869520" />
                <hr/>
                <AboutUs name="สุทธิพจน์"
                    email="6510210338@email.psu.ac.th"
                    contact="090-259681" />
            </div>
        </div>
    );
}

export default AboutUsPage;
