
let arr = [20,30,40,50,100]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }

// console.log(sum)

//Add elements onto end of array

// arr.push(200)

// let newArr = arr.filter((element) => {
//     console.log(element) 
//     if (element > 50) {
//         return true

//     }
// })

// console.log(arr)

let grades = ["A+", "A", "B+", "B","FAIL"]

let newGrades = grades.map((element => element !== 'FAIL'))

console.log(newGrades)