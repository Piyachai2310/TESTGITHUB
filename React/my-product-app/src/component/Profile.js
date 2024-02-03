import React from 'react';

// const user ={
//   firstName: 'Piyachai',
//   lastNmae: 'Narongsab',
//   imageurl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww'
// }

function Profile(prop) {
    return (
      <div className="App">
        <h1> My Profile </h1>
        <h3> {prop.data.firstName} {prop.data.lastNmae} </h3>
        <div className='Image'>
        <img src={prop.data.imageurl}></img>
        </div>
      </div>
    );
  }
  
  export default Profile;