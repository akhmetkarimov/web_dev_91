// document.getElementById - 1 obj {}
// document.getElementsByClassName - 1..n arr []
// document.getElementsByTagName - 1..n arr []

document.getElementById('myId').innerHTML = 'hello, dom js <a href="#">Hello link</a>' // html-tag
// document.getElementById('myId').innerText = 'hello, dom js <a href="#">Hello link</a>'  // - string

// document.getElementById('myId').attributes
// document.getElementById('myId').style
// document.getElementById('myId').src
// document.getElementById('myId').type
// document.getElementById('myId').name
// document.getElementById('myId').value

// document.getElementsByClassName('item-ul')[1].innerHTML = 'Second Item'
let ulItems = document.getElementsByClassName('item-ul')


// for(let index in ulItems) {
//     ulItems[index].innerHTML = `${index} DOM item`
// }

for (let li of ulItems) {
    li.innerHTML = 'DOM item from for of'
}


document.querySelector('.item-ul').innerHTML = 'query selector item'

// document.querySelector  - 1 obj {} если слектор по классу или по тёгу то он вернет самый первый элемент

let qUlItems = document.querySelectorAll('.item-ul')

for (let li of qUlItems) {
    li.innerHTML = 'DOM item from for of QuerySelector'
    li.style.textAlign = 'center'
    li.style.textDecoration = 'underline'
}

console.log(ulItems, qUlItems)