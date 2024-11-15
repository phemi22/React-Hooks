import { useMemo } from "react"

export default function Child({buttonClicker}){
    console.log("Child Component Is Running")
    
    return(
        <div>
            <button onClick={buttonClicker}>Click Here</button>
        </div>
    )
}

