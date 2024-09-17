const sum = (arr:number[]):number =>{
    let sum1:number = 0
    arr.forEach(n => {
        sum1 += n
    })
    return sum1
}