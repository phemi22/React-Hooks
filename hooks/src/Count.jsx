import { useState } from "react"

export default function Counter(){

    const [countValue, setCountValue] = useState(0)

    const countChanger = ()=>{
        setCountValue(countValue + 1)
    }

    return(

        <div>
            <button onClick={countChanger}>Click To Count</button>
            <h1>{countValue}</h1>
        </div>
    )
}