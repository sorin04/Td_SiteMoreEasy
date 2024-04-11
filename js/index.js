console.log("test js");
document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        console.log("c'est ok")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit');

    loginInput.addEventListener('input', toggleSubmitButton);
    passwordInput.addEventListener('input', toggleSubmitButton);

    function toggleSubmitButton() {
        submitButton.disabled = !(loginInput.value.trim() !== '' && passwordInput.value.trim() !== '');
    }
});
