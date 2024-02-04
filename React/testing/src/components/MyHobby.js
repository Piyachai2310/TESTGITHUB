import './MyHobby.css'
function MyHobby(props) {
    return (
        <div>
            <div className="bodyMyHobby">
                <h2 id="anime">อนิเมะที่ชอบ</h2>
                <div className="container">
                    <img src="juju.jpg" style={{ width: '100%' }}></img>
                    <h2 id='juju'>jujutsu kaisen มหาเวทย์ผนึกมาร</h2>
                    <hr />
                </div>
            </div>
            <div className="bodyMyHobby2">
                <h2>หนังที่ชอบ : {props.movies}</h2>
                <div className="container2">
                    <p id="harry">{props.histry}</p>
                    <img src="Harry.jpg" style={{ width: '50%' }}></img>
                </div>

            </div>

        </div>
    );
}
export default MyHobby;