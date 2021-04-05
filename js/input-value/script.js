// Наши пользователи 
const users = [{
        login: 'admin',
        password: 'admin'
    },
    {
        login: 'decode',
        password: 'decode'
    },
    {
        login: 'whoiam',
        password: 'whoiam'
    },
    {
        login: 'hello',
        password: 'hello'
    }
]

// Функция для проверки пользователя
function login() {

    const user = document.querySelector('#username')
    const password = document.querySelector('#pass')

    let checkLogin = false // boolean - true, false
    let checkPass = false

    for (const item of users) {
        if (item.login === user.value.toLowerCase()) {
            checkLogin = true
        }
        if (item.password === password.value) {
            checkPass = true
        }
    }

    // const response = check(checkLogin, checkPass)
    const { status, result } = check(checkLogin, checkPass)
    
    if (status) {
        alert('Добро пожаловать!')
    } else {
        alert(result)
    }
}

// проверка login и password на соответсвие
function check(login, pass) {
    let result = ''
    let status = true

    if (!login) {
        result = 'Логин неправильный'
        status = false
    }

    if (!pass) {
        result = 'Пароль неправильный'
        status = false
    }

    if (!login && !pass) {
       result = 'Неправильный логин и пароль' 
       status = false
    } 

    return {
        status: status, 
        result: result
    }
}