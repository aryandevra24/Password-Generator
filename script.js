const pwd = document.querySelector('#password')
const cpBtn = document.querySelector('.input-box>span')

cpBtn.addEventListener('click', async () => {
    await navigator.clipboard.writeText(pwd.value);

    cpBtn.style.cursor = 'default'
    cpBtn.title = "Copied!"
    cpBtn.innerHTML = "       assignment_turned_in"

    setTimeout(() => {
        cpBtn.style.cursor = 'pointer'
        cpBtn.title = "Copy to Clipboard"
        cpBtn.innerHTML = "content_copy"
    }, 2000)
})


const range = document.querySelector('.length')
const lengthTxt = document.querySelector('.length-txt')

range.addEventListener('change', (e) => {
    lengthTxt.textContent = range.value
})


const msg = document.querySelector('.msg')

const lowercase = document.querySelector('#lowercase')
const uppercase = document.querySelector('#uppercase')
const number = document.querySelector('#number')
const symbol = document.querySelector('#symbol')

function gnrtPwd() {
    let password = ''

    let upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
    let nums = '0123456789'
    let syms = '~!@$%^&*()-_=+[{]}\|;:\'",<.>/?'

    let allChars = ''
    allChars += lowercase.checked ? lowerChars : ''
    allChars += uppercase.checked ? upperChars : ''
    allChars += number.checked ? nums : ''
    allChars += symbol.checked ? syms : ''

    if (!allChars) {
        msg.style.display = 'block'
        return
    } else {
        msg.style.display = 'none'
    }

    for (let i = 0; i < range.value; i++) {
        password += allChars[Math.trunc(Math.random() * allChars.length)]
    }

    return password
}


const gnrtBtn = document.querySelector('#gnrt-btn')

gnrtBtn.addEventListener('click', () => {
    setPwd()
})

function setPwd() {
    pwd.value = gnrtPwd() ?? pwd.value
}

setPwd()