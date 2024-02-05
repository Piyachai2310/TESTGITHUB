import AppHeader from './component/AppHeader';
import TattooItem from './component/TattoolItem';
import TattooPost from './component/Tattoolport';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="app-grid"> {/*การใส่ path ภาพ จะไม่มี auto จะต้องใส่เองทั้งหมด */}
        <TattooItem title="ภาพเท่ๆ" thumbnalUrl="/Photo.jpg" /> {/*การส่ง props ชื่อจะต้องตรงกับ props ที่เป็นตัวรับ */}
        <TattooItem title="กล้อง" thumbnalUrl="/photo.jfif" />
        <TattooItem title="react" thumbnalUrl="/logo512.png" />
        <TattooPost title="react" thumbnalUrl="/logo192.png" />
      </div>
    </div>
  );
}

export default App;