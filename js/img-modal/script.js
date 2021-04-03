// Картинки для вывода
const images = [
    'imgs/img1.jpeg',
    'imgs/img2.jpeg',
    'imgs/img3.jpeg',
    'imgs/img4.jpeg',
]
// Получаем тэг для вывода всех картинов
const allImgsDiv = document.querySelector('#all-imgs')

// Получаем тэг для открытия модального окна
const modal = document.querySelector('.modal')
// Получаем тэг для вывода картинки в модальном окне
const modalImg = document.querySelector('#modal-img')

// Хранилеще для ген.тэгов
let outImgs = ''

// Генерация тэгов картинок
images.forEach((src, i)=>{
    outImgs += `<img src='${src}' class="img-item" onclick="showImg(${i})">`
})

// Вывод всех картинок на сайте
allImgsDiv.innerHTML = outImgs

// Функция для открытия и для закрытия модального окна
function toggleModal(action) {
    if (action === 'open') {
        modal.classList.add('active')
    } else {
        modal.classList.remove('active')
    }
}

// индекс картинки которая сейчас выведена
let globalIndex = 0

// Функция для вывода картинки в модальном окне
function showImg(imgIndex) {
    // Проверяется переход по картинкам 
    if (imgIndex >= images.length) {
        imgIndex = 0
    } else if (imgIndex < 0) {
        imgIndex = images.length - 1
    }
    // указвается нынешняя картинка
    globalIndex = imgIndex

    // картинка открыется в модальном окне
    modalImg.src = images[imgIndex]
    toggleModal('open')
}

// Функция для переключения картиники 
function nextPrevImg(n) {
    globalIndex = globalIndex + n
    showImg(globalIndex)
}   




// ------------------ Описание forEach, Map

// Перебор элементов
// images.forEach((src, i)=>{
//     console.log(src, i)
// })

// Перебор элементов, создание нового массива
// const res = images.map((src, i)=>{
//     return src + ' Hello'
// })