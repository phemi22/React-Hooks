import { useState, useCallback } from "react";
import Child from "./Child.jsx";


export default function Parent(){

    const [countValue, setCountValue] = useState(0)
    const [input, setInput] = useState(" ")

    const clickManager = useCallback(()=>{
        console.log("Button Clicked")
    })

    return(
        <div>
            {/* <button onClick={()=>setCountValue(countValue + 1)}>Click To Count</button>
            {countValue} */}


            <input 
            type="text"
            value={input} 
            onChange={(e)=>setInput(e.target.value)}
            />

            <h2>Count Value : {countValue}</h2>
            <button onClick={()=>setCountValue(countValue + 1)}>Click To Count</button>

            <Child 
            buttonClicker={clickManager}
            />
        </div>
    )
}