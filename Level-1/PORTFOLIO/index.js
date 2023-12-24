
//typed animation
let typed = new Typed(" .typing",{
    strings:[" Web Developer.","App Developer.","UI/UX Designer.","Software enginner U.G"],
    typespeed:100,
    backSpeed:60,
    loop:true
})

// form email input validate
function validateForm() {
    let emailInput = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailInput.value)) {
        emailError.innerHTML = 'Please enter a valid email address.';
    } else {
        emailError.innerHTML = '';
    }
}