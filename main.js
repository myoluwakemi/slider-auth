const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signInContainer = document.getElementById("signInContainer");
const overlayContainer = document.getElementById("overlayContainer");
const signUpContainer = document.getElementById("signUpContainer");

signUpButton.addEventListener('click', () =>{
    container.classList.add('right-panel-active');
    // signInContainer.style.transform = "translateX(100%)";
    // overlayContainer.style.transform = "translateX(-100%)"
    
});

signInButton.addEventListener('click', () =>{
    container.classList.remove(("right-panel-active"))
})
