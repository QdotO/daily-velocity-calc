import React, { useEffect, useState } from 'react';
import { dvCalc } from './dvCalc';
import './DailyVelocityCalc.css';

const DailyVelocityCalc = () => {
    const [days, setDays] = useState("0");
  const [remaining, setRemaining] = useState("0");
  const [result, setResult] = useState("0");

  useEffect (()=> {
    if(days && remaining){
      console.log(`Days: ${days}`)
      console.log(`Remaining: ${remaining}`)
      let temp = dvCalc(remaining, days);
      console.log(`Result before setting: ${temp}`)
      let timeoutId = setTimeout(setResult(temp), 500);
      return () => { clearTimeout(timeoutId) }
    }

  }, [days, remaining, setResult])
    return (
        <div className="dvCalcContainer">
            <div className="form">
                <label>Remaining Number of Days</label>
                <input onChange={({ target: { value } }) => setDays(value)} value={days} />
                <label>Remaining Amount of Money</label>
                <input onChange={({ target: { value } }) => setRemaining(value)} value={remaining} />
            </div>
            <div className="dvMessage">
                <h3>{`Daily velocity is $${result}`}</h3>
                <h4>{`for $${remaining} over ${days} days`}</h4>
            </div>
        </div>
    );
}

export default DailyVelocityCalc;