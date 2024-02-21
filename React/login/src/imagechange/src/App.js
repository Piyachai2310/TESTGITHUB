import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Image1 = () => {
  return (
    <div>
      <img src="Apex.jfif" alt="Apex Legends Game" />
    </div>
  );
};

const Image2 = () => {
  return (
    <div>
      <img src="Overwatch2.jfif" alt="Overwatch 2 Game" />
    </div>
  );
};

const App = () => {
  const [image, setImage] = useState('Apex.jfif');

  const handleImageChange = (event) => {
    const newImage = event.target.value;
    setImage(newImage);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/image1">Image 1</Link>
            </li>
            <li>
              <Link to="/image2">Image 2</Link>
            </li>
          </ul>
        </nav>

        <label htmlFor="imageSelector">Select Image: </label>
        <select id="imageSelector" onChange={handleImageChange} value={image}>
          <option value="Apex.jfif">Image 1</option>
          <option value="Overwatch2.jfif">Image 2</option>
        </select>

        <Routes>
          <Route path="/image1" element={<Image1 />} />
          <Route path="/image2" element={<Image2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
