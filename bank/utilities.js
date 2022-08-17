function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId)
    const inputFieldValue = parseFloat(inputField.value)
    inputField.value = ''
    return inputFieldValue
}


function getTextById(textId) {
    const textField = document.getElementById(textId)
    const textFieldValue = parseFloat(textField.innerText)
    return textFieldValue
}

function getTextOfTotalValue(textId, newValue) {
    const textOfId = document.getElementById(textId)
    textOfId.innerText = newValue
}