let h2Text = document.getElementById('htmlH2')

h2Text.innerHTML = 'FROM JS DOM <a href="https://decode.kz" class="sub-title">Link to web</a>'
h2Text.style.color = 'blue'

// h2Text.append(['<p>hello</p>'])

console.log(h2Text.classList)
console.log(h2Text.className)

h2Text.classList.add('sub-title')
h2Text.className += ' sub-title'

// querySelector('.box') 1
// querySelectorAll('.box') 1...n []


// CRUD
// Create 
// Read
// Update
// Delete