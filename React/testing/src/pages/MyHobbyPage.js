import MyHobby from "../components/MyHobby";
import './MyHobbyPage.css'
function MyHobbyPage(){
    return(
        <div className="bodyMyHobbyPage">
            <div align="left" >
                <div align="center">
                    <h1>My Hobby</h1>
                    <h2>เพลงที่ชอบฟัง: แค่อยากน่ารัก もっと可愛い -TEENIE | Cover by SHUN&SEN</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eFFLtIllcNk?si=YguovTJvgXehdFHg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                    <hr />
                    <MyHobby movies="Harry Potter"
                             histry="เป็นชุดนวนิยายแฟนตาซีจำนวนเจ็ดเล่ม ประพันธ์โดยนักเขียนชาวอังกฤษชื่อว่า เจ. เค. โรว์ลิง 
                             เป็นเรื่องราวการผจญภัยของพ่อมดวัยรุ่น แฮร์รี่ พอตเตอร์ กับเพื่อนสองคน รอน วีสลีย์ และ เฮอร์ไมโอนี่ เกรนเจอร์ 
                             ซึ่งทั้งหมดเป็นนักเรียนของโรงเรียนคาถาพ่อมดแม่มดและเวทมนตร์ศาสตร์ฮอกวอตส์ 
                             โครงเรื่องหลักเกี่ยวกับภารกิจของแฮร์รี่ในการเอาชนะพ่อมดศาสตร์มืดที่ชั่วร้าย ลอร์ดโวลเดอมอร์ ผู้ที่ต้องการจะมีชีวิตเป็นอมตะ 
                             มีเป้าหมายเพื่อพิชิตมักเกิ้ล หรือประชากรที่ไม่มีอำนาจวิเศษ พิชิตโลกพ่อมดและทำลายทุกคนที่ขัดขวาง 
                             โดยเฉพาะอย่างยิ่ง แฮร์รี่ พอตเตอร์"/> 
                </div>
            </div>
        </div>
    );
}
export default MyHobbyPage;