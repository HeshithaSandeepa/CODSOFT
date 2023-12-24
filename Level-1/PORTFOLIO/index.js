
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

document.getElementById('menu').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default behavior of the anchor tag

    // Remove the "active" class from all links
    let links = document.querySelectorAll('#menu a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });
    // Add the "active" class to the clicked link
    e.target.classList.add('active');


    let targetId = e.target.getAttribute('href').substring(1);
    //  add go to top of the page when click Home
    if (targetId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
});