/* =========================================================================
=============================== Basic Structure ================================
==========================================================================*/

// /* ==================== Deposit ==================== */

// // Step-1: Add event listener to deposit button
// document.getElementById('deposit-button').addEventListener('click', function () {
//     // Step-2: Get the deposit amount
//     const depositInput = document.getElementById('deposit-input')
//     const depositInputValue = depositInput.value

//     // Warning
//     if (depositInputValue == '') {
//         alert('Please provide a valid number')
//     }

//     // Step-3: Get the current deposit total
//     const depositValue = document.getElementById('deposit-value')
//     const depositValueText = depositValue.innerHTML
//     const depositValueUpdate = Number(depositValueText) + Number(depositInputValue)
//     depositValue.innerHTML = depositValueUpdate
//     depositInput.value = ''

//     // Step-4: Get Update Balance
//     const balanceValue = document.getElementById('balance-value')
//     const balanceValueText = balanceValue.innerText
//     const balanceValueUpdate = Number(balanceValueText) + Number(depositInputValue)
//     balanceValue.innerText = balanceValueUpdate
// })




// /* ==================== Withdraw ==================== */

// // Add event listener to withdraw button
// document.getElementById('withdraw-button').addEventListener('click', function () {
//     // Get the withdraw amount
//     const withdrawInput = document.getElementById('withdraw-input')
//     const withdrawInputValue = withdrawInput.value

//     // Warning
//     if (withdrawInputValue == '') {
//         alert('Please provide a valid number')
//     }

//     // Get the current withdraw value
//     const withdrawValue = document.getElementById('withdraw-value')
//     const withdrawValueText = withdrawValue.innerText

//     // Get Balance value
//     const balanceValue = document.getElementById('balance-value')
//     const balanceValueText = balanceValue.innerText

//     // It will return while withdraw amount is more then balance
//     if (parseFloat(withdrawInputValue) > parseFloat(balanceValueText)) {
//         alert('Baper bank a taka kom.')
//         return;
//     }

//     // Update withdraw value
//     const withdrawValueUpdate = Number(withdrawValueText) + Number(withdrawInputValue)
//     withdrawValue.innerText = withdrawValueUpdate
//     withdrawInput.value = ''


//     // Get Balance Update
//     const balanceValueUpdate = Number(balanceValueText) - Number(withdrawInputValue)
//     balanceValue.innerText = balanceValueUpdate
// })







/* =========================================================================
=============================== Professional / Easyest Way ================================
==========================================================================*/

document.getElementById('deposit-button').addEventListener('click', function () {
    const inputValue = getInputValueById('deposit-input')
    const depositValue = getTextById('deposit-value')
    const balanceValue = getTextById('balance-value')

    if (inputValue == 0) {
        alert('Please provide a number')
    }

    const totalDepositValue = inputValue + depositValue
    const totalBalanceValue = inputValue + balanceValue

    getTextOfTotalValue('deposit-value', totalDepositValue)
    getTextOfTotalValue('balance-value', totalBalanceValue)
})




document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputValue = getInputValueById('withdraw-input')
    const withdrawValue = getTextById('withdraw-value')
    const balanceValue = getTextById('balance-value')

    if (inputValue == 0) {
        alert('Please provide a number')
    }

    const totalwithdrawValue = withdrawValue + inputValue
    const totalBalanceValue = balanceValue - inputValue

    if (totalBalanceValue < 0) {
        alert('You don\'t have enough money')
        return
    }

    getTextOfTotalValue('withdraw-value', totalwithdrawValue)
    getTextOfTotalValue('balance-value', totalBalanceValue)
})