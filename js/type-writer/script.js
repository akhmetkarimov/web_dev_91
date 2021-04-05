// Слова для вывода
const outputWords = [
    'Alisher',
    'Amantay',
    'Anel',
    'Dilya',
    'Dimash',
    'Ilyas'
]
// тэг в которым мы выводим данные
const typeout = document.querySelector('#typeout')
// индекс слова который выводиться на данный момент
let wordIndex = 0
// Количество букв или же идекс буквы выбранного слова
let charIndex = 0

printWord()

// Функция для вывода слова, функция будет работать пока слова не закончиться 
function printWord() {
    if(outputWords[wordIndex].length > charIndex) {
        typeout.innerHTML += outputWords[wordIndex].charAt(charIndex)
        charIndex += 1
        // Буквы печатаются со скоростью 1.5ms
        setTimeout(printWord, 150)
    } else {
        setTimeout(deleteWord, 50)
    }
}

// Функция для удаления слова
function deleteWord() {
    if(charIndex >= 0) {
        typeout.innerHTML = outputWords[wordIndex].substr(0, charIndex)
        charIndex -= 1
        setTimeout(deleteWord, 50)
    } else {
        wordIndex += 1
        if (wordIndex >= outputWords.length) {
            wordIndex = 0
        } 
        setTimeout(printWord, 150)
    }
}





// setTimeout - 1
// setInterval - 1 ... n

// setTimeout(function, timer, args)

// Alisher
// 0123456

// A
// Al 
// Ali 
// Alis
// Alish
// Alishe
// Alisher

// str.charAt(index) -> char

// 'decode'.chartAt(4) -> d
// 'decode'.chartAt(2) -> c
