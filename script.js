/*    ELEMENT SELECTORS */
const passwordInput = document.querySelector('#password')
const copyButton = document.querySelector('.input-box>span')
const lengthSlider = document.querySelector('.length')
const lengthLabel = document.querySelector('.length-txt')
const warningMessage = document.querySelector('.msg')

const lowercaseCheckbox = document.querySelector('#lowercase')
const uppercaseCheckbox = document.querySelector('#uppercase')
const numberCheckbox = document.querySelector('#number')
const symbolCheckbox = document.querySelector('#symbol')

const generateButton = document.querySelector('#gnrt-btn')


/*   CONSTANT CHAR SETS*/
const CHARSETS = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '~!@$%^&*()-_=+[{]}\\|;:\'",<.>/?'
}


/*    CLIPBOARD FUNCTIONS */
async function copyPasswordToClipboard() {
    await navigator.clipboard.writeText(passwordInput.value)
    showCopiedState()
}

function showCopiedState() {
    copyButton.style.cursor = 'default'
    copyButton.title = "Copied!"
    copyButton.innerHTML = "assignment_turned_in"

    setTimeout(resetCopyButtonState, 2000)
}

function resetCopyButtonState() {
    copyButton.style.cursor = 'pointer'
    copyButton.title = "Copy to Clipboard"
    copyButton.innerHTML = "content_copy"
}


/*   PASSWORD GENERATION*/
function getSelectedCharacters() {
    let characters = ''
    if (lowercaseCheckbox.checked) characters += CHARSETS.lower
    if (uppercaseCheckbox.checked) characters += CHARSETS.upper
    if (numberCheckbox.checked) characters += CHARSETS.numbers
    if (symbolCheckbox.checked) characters += CHARSETS.symbols
    return characters
}

function generateRandomPassword(length, characters) {
    let password = ''
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.trunc(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function generatePasswordHandler() {
    const characters = getSelectedCharacters()

    if (!characters) {
        warningMessage.style.display = 'block'
        return
    }

    warningMessage.style.display = 'none'
    passwordInput.value = generateRandomPassword(lengthSlider.value, characters)
}


/*    UI FUNCTIONS */
function updateLengthLabel() {
    lengthLabel.textContent = lengthSlider.value
}


/*   EVENT LISTENERS*/
function setupEventListeners() {
    copyButton.addEventListener('click', copyPasswordToClipboard)
    generateButton.addEventListener('click', generatePasswordHandler)
    lengthSlider.addEventListener('change', updateLengthLabel)
}


/*   MAIN ENTRY FUNCTION*/
function main() {
    setupEventListeners()
    updateLengthLabel()
    generatePasswordHandler() // generate first password on load
}

main()
