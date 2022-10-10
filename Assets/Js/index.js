console.log("Your js file is working now successfully..!!")
// tablet screen
var tabletScreen = window.matchMedia("(max-width:1024px)")
// mobile screen
var mobileScreen = window.matchMedia("(max-width:425px)")
var rightSlider = document.querySelector('.right-slider')
var toggler = rightSlider.querySelector('.toggler');
toggler.addEventListener('click', toggleSlider)

function toggleSlider() {
    var parent = this.parentNode;
    var icon = this.querySelector('.slider-icon img');
    var text = this.querySelector('.slider-text')
    
    parent.classList.toggle('hide')
    
    if(parent.classList.contains('hide')){
        icon.src ='../../Assets/Images/icons/eye.png'
        icon.style.padding = "0 20px"
        icon.style.width = "90px"
        text.innerText = 'Show'
    }else{
        icon.src ='../../Assets/Images/icons/hide-eye.svg'
        icon.style.padding = "0"
        text.innerText = 'Hide'
    }
}


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

// for alert box
let redAlert = document.getElementById("red-alert")
if (redAlert) {
    setTimeout(function () {
        document.getElementById("red-alert").style.display = "none"
    }, 3000)
}

