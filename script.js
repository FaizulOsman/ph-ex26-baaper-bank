document.getElementById('submit-button').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email')
    const userPassword = document.getElementById('user-password')
    if (userEmail.value == 'baaper@bank.com' && userPassword.value == 'sontan') {
        location.href = 'bank/bank.html'
    } else {
        alert('dure giya mor')
    }
})