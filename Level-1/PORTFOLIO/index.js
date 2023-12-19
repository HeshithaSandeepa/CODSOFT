//about me education skills
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//typed animation
let typed = new Typed(" .typing",{
    strings:[" Web Developer","App Developer","UI/UX Designer","Software enginner U.G"],
    typespeed:100,
    backSpeed:60,
    loop:true
})