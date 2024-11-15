import { useEffect, useState } from "react"

export default function Effecter(){

    const [countValue, setCountValue] = useState(0)
    const [newCount, setNewCount] = useState(0)

    useEffect(()=>{
        document.title = `Femi ${countValue}`
    }, [countValue])

    return(
        <div>
            <button onClick={()=>setCountValue(countValue + 1)}>Click To Count</button>
            <h1>{countValue}</h1>

            <div>
                <button onClick={()=>setNewCount(newCount + 1)}>Click To Count</button>
                <h1>{newCount}</h1>
            </div>
        </div>      
    )
}