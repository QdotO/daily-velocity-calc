/* 
* Will calculate the daily spending velocity when given
* the {remaining} amount of units
* the number of {days} left
* 
* 
*/
// const dvCalc = (remaining, days)=> {
export const dvCalc = (remaining, days)=> {
    if(remaining === 0|| days === 0) return 0;
    let result = remaining / days;
    let roundedResult = Math.round((result + Number.EPSILON) * 100) / 100
    return roundedResult;
}

// let result = dvCalc(463, 19);
// console.log(`Result: ${result}`);