// if (условие) {
//     тело
// }

// if (10 != 10) {
//     document.write('Okay')
// } else if (20 > 12) {
//     document.write('Good')
// } else if (22 == 22) {
//     document.write('Good 2')
// } else {
//     document.write('ohh, error')
// }

// if (10 != 10)
//     document.write('Okay')
// else if (20 > 12){
//     document.write('Good')
//     document.write('Good')
// }
// else if (22 == 22)
//     document.write('Good 2')
// else
//     document.write('ohh, error')

// false       false
// 20 > 20 && 10 < 4

// true        false
// 20 >= 20 || 10 < 4


// let school = 'decode'

// if ('decode' == school) {
//     document.write('Welcome')
// }

// if ('Almaty decode' == `Almaty ${school}`) {
//     document.write('<p>Welcome Almaty School</p>')
// }

// let count = 1

// while (30 >= count) {
//     document.write(`<p>JS ${count}</p>`)
//     count += 5
// }

// 1
// 6
// 11
// 16
// 21
// 26


// for (начало; условие; действие) {
//     тело
// }

// for (let toy = 1; toy <= 8; toy += 1) {
//     document.write(`<p>Toy ${toy} moved</p>`)
// }


// 1) toy = 1
// 2) 1 <= 8 true
// 3) Toy 1 moved
// 4) toy += 1 | toy = 2

// 1) toy = 2
// 2) 2 <= 8 true
// 3) Toy 2 moved
// 4) toy += 1 | toy = 3

// 1) toy = 3
// 2) 3 <= 8 true
// 3) Toy 3 moved
// 4) toy += 1 | toy = 4

// 1) toy = 4
// 2) 4 <= 8 true
// 3) Toy 4 moved
// 4) toy += 1 | toy = 5

// ...

// 1) toy = 8
// 2) 8 <= 8 true
// 3) Toy 8 moved
// 4) toy += 1 | toy = 9

// 1) toy = 9
// 2) 9 <= 8 false
// 3) Toy 8 moved XXXXX
// 4) toy += 1 | toy =  XXXX


// for (начало; условие; действие)
// for in

// ES6
// for of

// let products = [
//     'Milk',    //0
//     'Bananas', //1
//     'Bread',   //2
//     'Carrot',  //3
//     'Eggs'     //4
// ]

// index = 0; index < 5; index += 1

// for (let index = 0; index < products.length; index += 1) {
//     document.write(`<p>Product Item: ${products[index]}</p>`)
// }

// for (let index in products) {
//     document.write(`<p>(IN) Product Item: ${products[index]}</p>`)
// }

// for (let product of products) {
//     document.write(`<p>(OF) Product Item: ${product}</p>`)
// }

// 0: Milk
// 1: Bananas
// 2: Bread

// for, for in: 0, 1, 2, 3, ....

// for of: 'Milk', 'Bananas', 'Bread' ...

// 1 1 = 2
// 0 1 1 2 = 3
// 0 1 1 2 3 = 5
// 0 1 1 2 3 5 = 8


let count = +prompt('Enter count of fib')

let first = 1
let second = 2
let out = ''

for(let i = 3; i <= count; i++) {
    let temp = first 
    first = second 
    second = temp + second
    out += ` ${second}`
}

document.write(`<p>1 2 ${out}</p>`)

// [1 2] 3 5 8 13 21

// 1 2 = 3
// 2 3 = 5
// 3 5 = 8
// 5 8 = 13
// 8 13 = 21
// 13 21 = 34