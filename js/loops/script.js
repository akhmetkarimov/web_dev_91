// while (condition) {}

// let username = prompt('Enter username:')
let username = 'decode'
let attepts = 0
let fail = false

while (username != 'decode') {
    username = prompt('Please enter again:')
    
    attepts += 1

    if (attepts === 3) {
        fail = true
        document.write('<h3>FAIL!</h3>')
        break
    }

    // attepts = attepts + 1
    //   0 + 1 = 1
    //   1 + 1 = 2
    //   2 + 1 = 3
}

if (fail == false){
    document.write('<h3>Welcome Decode!</h3>')
}

// document.write('<p>Failed: ' + attepts + '</p>')
document.write(`<p>Failed: ${attepts}</p>`)



let counter = 0

while (5 > counter) {
    document.write('<p>JavaScript</p>')
    counter++
}


let imgSrc = 'https://doitbeforeme.com/wp-content/uploads/2019/01/50-stunning-iphone-wallpaper-backgrounds-for-2019-22.jpg'

let imgCounter = 0

document.write('<div class="wrap">')

while (4 > imgCounter) {

    document.write(`
    <div class="photo-item">
        <img src='${imgSrc}'>
    </div>
    `)

    imgCounter++
}

document.write('</div>')



// for(start; condition; action) {}
// for(start; end; step) {}

let sumEven = 0
let sumOdd = 0
for (let i = 0; i <= 24; i++) {
    if (i % 2 == 0) {
        // document.write(`<p>Iteration: ${i}</p>`)
        sumEven += i
        // 0 + 2 = 2
        // 2 + 4 = 6
        // 6 + 6 = 12
        // 12 + 8 = 20
    } else {
        sumOdd += i
    }
}

document.write(`<p>Sum Even numbers: ${sumEven}</p>`)
document.write(`<p>Sum Odd numbers: ${sumOdd}</p>`)
