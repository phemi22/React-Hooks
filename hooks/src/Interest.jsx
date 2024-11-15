import { useState } from "react"

export default function InterestCalculator(){

    const [principalAmount, setPrincipalAmount] = useState(" ")
    const [interestRate, setInterestRate] = useState(" ")
    const [roi, setroi] = useState(" ")

    const calculateroi = ()=>{
        let interest = (principalAmount * interestRate) / 100
        setroi(interest)
    }

    return(
        <div>
            <h1>Calculate Your Annual Interest</h1>
            
                <div className="input-group">
                    <label htmlFor="principal">Enter Amount</label>
                    <input 
                    type="number"
                    id="principal"
                    name="principal"
                    value={principalAmount || " "}
                    onChange={(e)=>setPrincipalAmount(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="rate">Preferred Interest Rate(%)</label>
                    <input 
                    type="number"
                    id="rate"
                    name="rate"
                    value={interestRate || " "}
                    onChange={(e)=>setInterestRate(e.target.value)}
                    />
                </div>

                <button onClick={calculateroi}>See ROI</button>
                <h1>ROI (NGN): {roi}</h1>
            
        </div>
    )
}