import './App.css';
import { useState } from "react";


function App() {

  const [x, setX] = useState(0);
  return (
    <div className='counter'>

      <div className='x'>
           {x}
      </div>

       <div className='btn'>
       <button onClick= { () => {setX(x+1)} }>Increment</button>
       <button onClick= { () => {setX(x-1)} }>Decrement</button>
       </div>       
    </div>
  );
}

export default App;
