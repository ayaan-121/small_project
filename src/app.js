import React from "react";
import {useState} from 'react';
export function App(){
    const [gf,newgf]=useState('Deepika');
    const ayaan=()=>{
        alert("hello world")
    }
    return(
        <div>
            <button onClick={ayaan}>
                click me
            </button>
        

<h2>Current gf of Ranbir kapoor is {gf}</h2>
<button onClick={()=>newgf("Alia Bhatt")}>click here!!!!!</button>
<button onClick={()=>newgf("Katrina Kaif")}>Don't click here!!!!!</button>
</div>
    )

}
export default App;