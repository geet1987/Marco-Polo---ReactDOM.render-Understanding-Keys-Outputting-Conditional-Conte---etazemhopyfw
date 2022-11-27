// import React from 'react'
// import '../styles/App.css';
// const App = () => {
//   const [count, setCount] = useState(true);
//   return (
//     <div id="main">
//       <h1 id='marco polo'>{setCount}</h1>
//     </div>
//   )
// }


// export default App;
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [st, setSt] = useState(true);

  return (
    <div id="main">
      <h1 id="marco-polo">{st ? 'Marco' : 'Polo'}</h1>
      <button id="marco-polo-toggler" onClick={() => setSt(st => !st)}>{st ? 'Polo' : 'Marco'}</button>
    </div>
  )
}


export default App;
