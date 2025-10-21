'use client';
import { useState } from "react";


export default function NotHomePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className='homepagetag'>Not Home Page</h1>
      <div className='counterArea'>
        
        
        <p>{count > 5 ? "You passed 5!": ""}</p>

        <p>Counter: {count}</p>



        <button onClick={() =>setCount(count + 1)}>Increase</button>  
        <button onClick={() =>setCount(count - 1)}>Decrease</button>  


      </div>    
    
    
    
    
    
    </div>
  );
}