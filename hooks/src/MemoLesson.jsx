import { useState, useMemo } from "react"

export default function MemoLesson(){

    const [countValue, setCountValue] = useState(0)
    const [number, setNumber] = useState(" ")

    const bigCalculation = (number)=>{
        let loopTime = 0
        for(let x = 0; x < 10000000; x++){
            loopTime += number
        }

        return loopTime
    }

    const addedValue = useMemo(()=> bigCalculation(number),[number])

    return(

        <div>

            <p>Huge Part Of The Component</p>
            <input 
            type="number"
            name="number"
            value={number}
            onChange={(e)=>setNumber(parseInt(e.target.value) || "")}
            />
            <h3>The Result Of The Big Calc Is : {addedValue}</h3>

            <p>Light Part Of The Component</p>
            <button onClick={()=>setCountValue(countValue + 1)}>Click To Count</button>
            <h3>Count Is : {countValue}</h3>
        </div>
    )
}