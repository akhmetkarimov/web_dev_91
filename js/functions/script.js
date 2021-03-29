// Math.random() - Method
// prompt() - Function

// function name(params) {
//    action
// }
// Math.floor(2.8)

countEven(120) 

function countEven(end) {
    let count = 0
    for(let i = 0; i < end; i++){
        if(i % 2 == 0) {
            count += 1
            // count++
        }
    }
    document.write(`<p>Count even numbers ${end}: ${count}</p>`)
}

countEven(24) // call function
countEven(123)
countEven(31)
countEven(53)
countEven(77)
countEven(43)
countEven(98)
countEven(45)
countEven(12)
countEven(65)


const divider = (first, second) => {
    if (first % second == 0) {
        document.write('<p>Делиться</p>')
    } else {
        document.write('<p>Не делиться</p>')
    }
}

divider(20, 5)
divider(54, 98)


let almaty = 3000000

function future() {
    let almatyLocal = 6000000
    document.write(`<p>Current almaty: ${almaty}</p>`)
    document.write(`<p>Into future plan: ${almatyLocal}</p>`)
    almaty *= 3
}

future()

document.write(`<p>After future: ${almaty}</p>`)


// MERN
// M - MongoDb
// E - Express 
// R - React.js
// N - Node.js


function sum(n1, n2) {
    return n1 + n2
}

let result = sum(50, 20)

document.write(`<p>return function: ${result}</p>`)
document.write(`<p>return function: ${sum(21, 75)}</p>`)


// void function - процедура
// return function - integer, float, double, string, obj, arr