// import './App.css';
// import content from './content'
// function App() {
//   return (
//     <div className="App">
//       <content />
//     </div>
//   );
// }

// export default App;


import './App.css';
import Content from './content';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='Content'>
        <Content />
      </div>
    </div>
  );
}

export default App;
