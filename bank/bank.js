/* ==================== Deposit ==================== */

// Step-1: Add event listener to deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // Step-2: Get the deposit amount
    const depositInput = document.getElementById('deposit-input')
    const depositInputValue = depositInput.value

    // Warning
    if (depositInputValue == '') {
        alert('Please provide a valid number')
    }

    // Step-3: Get the current deposit total
    const depositeValue = document.getElementById('deposite-value')
    const depositeValueText = depositeValue.innerHTML
    const depositeValueUpdate = Number(depositeValueText) + Number(depositInputValue)
    depositeValue.innerHTML = depositeValueUpdate
    depositInput.value = ''

    // Step-4: Get Update balence
    const balenceValue = document.getElementById('balence-value')
    const balenceValueText = balenceValue.innerText
    const balenceValueUpdate = Number(balenceValueText) + Number(depositInputValue)
    balenceValue.innerText = balenceValueUpdate
})




/* ==================== Withdraw ==================== */

// Add event listener to withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // Get the withdraw amount
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputValue = withdrawInput.value

    // Warning
    if (withdrawInputValue == '') {
        alert('Please provide a valid number')
    }

    // Get the current withdraw value
    const withdrawValue = document.getElementById('withdraw-value')
    const withdrawValueText = withdrawValue.innerText

    // Get balence value
    const balenceValue = document.getElementById('balence-value')
    const balenceValueText = balenceValue.innerText

    // It will return whte withdraw amount is more then balence
    if (parseFloat(withdrawInputValue) > parseFloat(balenceValueText)) {
        alert('Baper bank a taka kom.')
        return;
    }

    // Update withdraw value
    const withdrawValueUpdate = Number(withdrawValueText) + Number(withdrawInputValue)
    withdrawValue.innerText = withdrawValueUpdate
    withdrawInput.value = ''


    // Get Balence Update
    const balenceValueUpdate = Number(balenceValueText) - Number(withdrawInputValue)
    balenceValue.innerText = balenceValueUpdate
})