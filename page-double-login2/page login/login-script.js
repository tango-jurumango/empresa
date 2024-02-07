//grab the sign up button,sign in button and container

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container =document.getElementById('container');
const title = document.getElementById('title');
const signUp = ()=>{
    container.classList.add('right-panel-active');
    title.innerHTML ="Sign Up";
};
const signIn =() =>{
    container.classList.remove('right-panel-active');
    title.innerHTML ="Sign In";
};

signUpButton.addEventListener('click', signUp);

signInButton.addEventListener('click', signIn);

//title.innerHTML ="Sign Up";
document.getElementById("togglePassword").addEventListener("click", function() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.textContent = "Ocultar senha";
    } else {
        passwordInput.type = "password";
        this.textContent = "Mostrar senha";
    }
});

document.getElementById("toggleConfirmPassword").addEventListener("click", function() {
    var confirmPasswordInput = document.getElementById("confirm_password");
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        this.textContent = "Ocultar senha";
    } else {
        confirmPasswordInput.type = "password";
        this.textContent = "Mostrar senha";
    }
});

