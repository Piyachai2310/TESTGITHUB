// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// const Image1 = () => {
//   return (
//     <div className='Image-display'>
//       <img src="Apex.jfif" alt="Apex Legends Game" />
//     </div>
//   );
// };

// const Image2 = () => {
//   return (
//     <div className='Image-display'>
//       <img src="Overwatch2.jfif" alt="Overwatch 2 Game" />
//     </div>
//   );
// };

// const App = () => {
//   const [image, setImage] = useState('Apex.jfif');

//   const handleImageChange = (event) => {
//     const newImage = event.target.value;
//     setImage(newImage);
//   };

//   return (
//     <Router>
//       <div className='container-imagechagne'>
//         <nav>
//           <div className='Choice'>
//             <div className='choice-click'><Link to="/image1"><img src="Apex.jfif" alt="Apex Legends Game" /></Link></div>
//             <div className='choice-click'><Link to="/image2"><img src="Overwatch2.jfif" alt="Overwatch 2 Game" /></Link></div>
//             <div className='choice-click'><Link to="/image1"><img src="Apex.jfif" alt="Apex Legends Game" /></Link></div>
//             <div className='choice-click'><Link to="/image2"><img src="Overwatch2.jfif" alt="Overwatch 2 Game" /></Link></div>
//           </div>
//           <div className='display'>
//             <Routes>
//               <Route path="/image1" element={<Image1 />} />
//               <Route path="/image2" element={<Image2 />} />
//             </Routes>
//           </div>
//         </nav>



//         {/* <label htmlFor="imageSelector">Select Image: </label>
//         <select id="imageSelector" onChange={handleImageChange} value={image}>
//           <option value="Apex.jfif">Image 1</option>
//           <option value="Overwatch2.jfif">Image 2</option>
//         </select> */}
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import './App.css';

const Image1 = () => {
  return (
    <div className='Image-display'>
      <img src="Apex.jfif" alt="Apex Legends Game" />
    </div>
  );
};

const Image2 = () => {
  return (
    <div className='Image-display'>
      <img src="Overwatch2.jfif" alt="Overwatch 2 Game" />
    </div>
  );
};

const App = () => {
  const [image, setImage] = useState('Apex.jfif');

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className='container-imagechagne'>
      <nav>
        <div className='Choice'>
          <div className='choice-click' onClick={() => handleImageChange('Apex.jfif')}><img src="Apex.jfif" alt="Apex Legends Game" /></div>
          <div className='choice-click' onClick={() => handleImageChange('Overwatch2.jfif')}><img src="Overwatch2.jfif" alt="Overwatch 2 Game" /></div>
          {/* ... ส่วนที่เหลือของโค้ด ... */}
        </div>
        <div className='display'>
          {image === 'Apex.jfif' ? <Image1 /> : <Image2 />}
        </div>
      </nav>
    </div>
  );
};

export default App;
