console.log("test js");
document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        console.log("c'est ok")
    }
}
window.onload = function() {
    console.log(location.search);

    const params = new URLSearchParams(location.search);
    const login = params.get('login');
    const password = params.get('password');
    const firstName = params.get('firstName');
    const lastName = params.get('lastName');

    document.getElementById('container').innerHTML = `
        <p>Login: ${login}</p>
        <p>Password: ${password}</p>
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
    `;
};
