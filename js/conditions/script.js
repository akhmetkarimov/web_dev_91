document.write(`<h3>Math Methods</h3>`)

document.write(`<p>Math.floor(2.9): ${Math.floor(2.9)}</p>`)
document.write(`<p>Math.ceil(2.1): ${Math.ceil(2.1)}</p>`)
document.write(`<p>Math.round(2.5): ${Math.round(2.5)}</p>`)
document.write(`<p>Math.round(2.2): ${Math.round(2.2)}</p>`)


document.write(`<p>Math.random(): ${Math.random()}</p>`)
document.write(`<p>Math.random() * 100: ${Math.random() * 100}</p>`)
document.write(`
        <p>Math.floor(Math.random() * 100): 
        ${ Math.floor(Math.random() * 100)}</p> 
        <hr>`)

// if (condition) {
// body.....
// }

// >, <, >=, <=, ==, ===, !=, !==

// let username = prompt('Enter username')
let username = 'decode'
username = username.toLowerCase()

if (username == 'decode') {
    document.write(`<h3>Welcome ${username}!!!</h3>`)
} else {
    document.write(`<h3>Invalid UserName!!!</h3>`)
}


let randNum1 = Math.floor(Math.random() * 100)
let randNum2 = Math.floor(Math.random() * 100)

document.write(`<p>Random Number 1 = ${randNum1}</p>`)
document.write(`<p>Random Number 2 = ${randNum2}</p>`)

if (randNum1 > randNum2) {
    document.write(`<p>Random Number 1 Max = ${randNum1}</p>`)
} else {
    document.write(`<p>Random Number 2 Max = ${randNum2}</p>`)
}

if (randNum1 < randNum2) {
    document.write(`<p>Random Number 1 Min = ${randNum1}</p>`)
} else {
    document.write(`<p>Random Number 2 Min = ${randNum2}</p>`)
}


if (10 > 20) {
    document.write(`<p>If 10 > 20</p>`)
} else if (21 == 32) {
    document.write(`<p>else if 21 == 32 (1)</p>`)
} else if ('hello' == 'hello') {
    document.write(`<p>else if 'hello' == 'hello' (2)</p>`)
} else if (15 > 2) {
    document.write(`<p>else if 15 > 2 (3)</p>`)
} else {
    document.write(`<p>else</p>`)
}
document.write(`<hr>`)

if (10 > 20) {
    document.write(`<p>If 10 > 20 (1)</p>`)
} 
if (21 == 32) {
    document.write(`<p>if 21 == 32 (2)</p>`)
} 
if ('hello' == 'hello') {
    document.write(`<p>if 'hello' == 'hello' (3)</p>`)
} 

if (15 > 2) {
    document.write(`<p>if 15 > 2 (4)</p>`)
}


// and, or
// &&, ||

let direction = 'left'

if (direction == 'right' || direction == 'left') {
    document.write('<p>On Right Way</p>')
} else {
    document.write('<p>Error</p>')
}


let motive = false
let knowledge = true
let aim = true
let hardWord = false
let money = false

// let success = motive && knowledge && aim && hardWord && money
let success = motive || (knowledge && aim) || hardWord || money

if (success) {
    document.write('<h2>You Success!!!</h2>')
} else {
    document.write('<h2>You Fail!!!</h2>')
}
