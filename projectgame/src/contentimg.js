import './contentimg.css';
import Box from './TattoolItem';

function Gametotal() {




    return (
        <div className="Container"> {/*การใส่ path ภาพ จะไม่มี auto จะต้องใส่เองทั้งหมด */}
            <div className='Box First'>
                <div className='box APEX'>
                    <div className='img'><img src="./Apex.jfif" /></div>
                    <div className='content'><h4>Apex Legends</h4></div>
                </div>
                <div className='box overwatch'>
                    <div className='img'><img src="./Overwatch2.jfif" /></div>
                    <div className='content'><h4>Overwatch2</h4></div>
                </div>
            </div>
            <div className='Box Two'>
                <div className='box VARORENT'>
                    <div className='img'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZK2p-Qp_RDfKPvyl6bl3p-hQfMuAbYCX-w&usqp=CAU" /></div>
                    <div className='content'><h4>VARORENT</h4></div>
                </div>
                <div className='box PUBG'>
                    <div className='img'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrkZOl3J31VIIz4tIRxNAjsP9DYqQ29cQ1YQ&usqp=CAU" /></div>
                    <div className='content'><h4>PUBG</h4></div>
                </div>
                <div className='box CALL'>
                    <div className='img'><img src="./Callofduty.jfif" /></div>
                    <div className='content'><h4>PUBG</h4></div>
                </div>
            </div>


        </div>
    );
}

export default Gametotal;