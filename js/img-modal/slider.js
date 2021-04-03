// Картинки для вывода
const sliderImages = [
    'imgs/img1.jpeg',
    'imgs/img2.jpeg',
    'imgs/img3.jpeg',
    'imgs/img4.jpeg',
]

// Получаем тэг для вывода всех картинов
const allSliderDiv = document.querySelector('#all-slider')

// Получаем тэг для вывода картинки по центру
const centerImg = document.querySelector('#img-center')

// Хранилеще для ген.тэгов
let sliderOut = ''

// Днинамичный размер для картинов по количеству
const imgWidth = 100 / sliderImages.length

// Генерация тэгов картинок
sliderImages.forEach((src, i)=>{
    sliderOut += `<img src = "${src}" class="slider-item" style="width: ${imgWidth}%" onclick="changeSlider(${i})">`
})

// Вывод всех картинок на сайте
allSliderDiv.innerHTML += sliderOut

// Функция для переключения картнок:
// - функция принимает индекс картинки, 
//   и по этому индексу вывододить картинку в центре,
//   и добавляет активность для слайдера.
function changeSlider(sliderIndex) {
    // получение всех слайдеров 
    const items = document.querySelectorAll('.slider-item')

    // Удаление активности во всех элементах слайдера
    items.forEach((item)=>{
        item.classList.remove('active')
    })

    // добавление активности в слайдер
    items[sliderIndex].classList.add('active')

    // вывод картинки в центре
    centerImg.src = sliderImages[sliderIndex]
}

