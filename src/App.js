import React from 'react';
import {useState} from 'react';

function App() {
  // implemente state 
  let [value, setValue] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setValue(value+=1)}>Increase</button>
      <button onClick={() => setValue(value-=1)}>Decrease</button>
      <button onClick={() => setValue(0)}>setToZero</button>
      {value}
    </div>
  );
}

export default App;
