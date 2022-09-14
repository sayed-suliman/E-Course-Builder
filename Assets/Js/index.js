console.log("Your js file is working now successfully..!!")
// tablet screen
var tabletScreen = window.matchMedia("(max-width:1024px)")
// mobile screen
var mobileScreen = window.matchMedia("(max-width:425px)")




let bool = true
function openNav() {
    console.log(bool)
    if (bool) {
        document.getElementById("mySidebar").style.width = "250px";
        bool = false
    }
     else {
        document.getElementById("mySidebar").style.width = "24px";
        bool = true
    }
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "24px";
    bool = true
}

// enabling tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
