import AboutUs from "../components/AboutUs";
import './AboutUsPage.css' 
function AboutUsPage(){
    return(
        <div className="bobyAboutUsPage">
            <div align="center">
                <h2 id="person">คณะผู้จัดทำ</h2>
                <AboutUs name=" นายปวริศ แจ่มจันทา" 
                         mail="6510210189@psu.ac.th" 
                         tel="091-167-4148"/><hr />

            </div>
        </div>
    );
}
export default AboutUsPage;