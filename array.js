const main = () => {
    const data = [1, 2, 3, 4, 5]
    const NewArray = data.filter((item) => item > 3)
    return NewArray
}

let array = [1, 2 , 3 , 5 , 10, 3, 2]
console.log(Math.min( ...array ))