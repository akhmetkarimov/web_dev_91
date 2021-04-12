const tabDiv = document.querySelector('#all-navs')

tabDiv.innerHTML += `<button onclick="filterContent(0)">ALL</button>`

categories.forEach((item) => {
    tabDiv.innerHTML += `<button onclick="filterContent(${item.id})">${item.name}</button>`
})

function filterContent(id) {
    const contentDiv = document.querySelector('#all-content')
    contentDiv.innerHTML = ''
    contents.forEach((content) => {
        if (content.catId == id) {
            contentDiv.innerHTML += genTabDiv(content)
        } else if (id == 0) {
            contentDiv.innerHTML += genTabDiv(content)
        }
    })
}

function genTabDiv(content) {
    return `<div class="tab-item">
        <img src="${content.src}">
        <div class="info">
            <h3>${content.name}</h3>
            <p>${content.desc}</p>
        </div>
    </div>`
}

filterContent(0)