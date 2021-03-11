let imgs = [
    'https://i.pinimg.com/originals/13/9b/c0/139bc04adcfd5bec7235370d7ff43f40.jpg',
    'https://download.asrock.com/Wallpaper/2020_Wallpaper_AQUA-logo_3840x2160.jpg',
    'https://img.freepik.com/free-vector/dark-paper-layers-wallpaper-with-golden-details_23-2148403401.jpg?size=626&ext=jpg',
    'https://i.pinimg.com/originals/13/9b/c0/139bc04adcfd5bec7235370d7ff43f40.jpg',
    'https://download.asrock.com/Wallpaper/2020_Wallpaper_AQUA-logo_3840x2160.jpg',
    'https://img.freepik.com/free-vector/dark-paper-layers-wallpaper-with-golden-details_23-2148403401.jpg?size=626&ext=jpg',
]

let categories = [
    'ALL',
    'Car',
    'moto',
    'bus'
]

document.write(`<img src='${imgs[0]}' width="200">`)
document.write(`<img src='${imgs[1]}' width="200">`)
document.write(`<img src='${imgs[2]}' width="200">`)

document.write('<hr>')

document.write('<div class="wrap tabs">')

for (let i = 0; i < categories.length; i++) {
    document.write(`
    <h3 class="tab-item">
        ${categories[i]}
    </h3>  
    `)
}


document.write('</div>')


document.write('<div class="wrap">')

for (let i = 0; i < imgs.length; i++) {
    document.write(`
    <div class="photo-item">
        <img src='${imgs[i]}' width="200">
    </div>  
    `)
}

document.write('</div>')
