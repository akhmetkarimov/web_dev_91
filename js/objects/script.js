// [] - array
// {} - object

// https://www.instagram.com/decode.kz/?__a=1


let car = {
    wheels: 4,
    body: 'Sedan',
    color: 'white',
    doors: 4,
    windows: ['back', 'front', 'left', 'right']
}

car.new = 'New values from js'
    // car.oil = prompt('Enter car oil')
car.wheels = 655
    // car.new = 123

document.write(`<p>Car wheel: ${car.wheels}</p>`)
document.write(`<p>Car Body: ${car['body']}</p>`)
document.write(`<p>Car new: ${car.new}</p>`)
document.write(`<p>Car Oil: ${car.oil}</p>`)
document.write(`<p>Car Windows: ${car.windows}</p>`)

let product = {
    name: 'Mobile phone',
    img: 'image source',
    price: 2456,
    rating: 4.5,
    category: 'phone'
}

product = 123

let students = [{
        id: 1,
        name: 'St 1',
        grade: 3.3
    },
    {
        id: 43,
        name: 'St 2',
        grade: 2.8
    },
    {
        id: 87,
        name: 'St 3',
        grade: 3.8
    }
]

let max = 0
let sum = 0

for (let item of students) {

    sum += item.grade
    // sum = sum + item.grade

    if (item.grade > max) {
        max = item.grade
    }
}

let avg = sum / students.length

for (let item of students) {
    // if (item.grade == max) {
    if (item.grade >= avg) {
        document.write(`
        <div class="student-card">
            <img src="https://i.stack.imgur.com/l60Hf.png">
            <div class="info">
                <p>${item.name}</p>
                <p>${item.grade}</p>
            </div>
        </div>
    `)
    }
}