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

// *********************

    // Creating whitebaord page

// ***********************************

let switchHideShow = document.querySelector("#switch input")
let navMenu = document.querySelector(".side-menu .nav-menu")
switchHideShow.addEventListener("change",()=>{
    if(!(switchHideShow.checked)){
        tabletScreenFtnHideOrOpen(tabletScreen)
        navMenu.style.transform = "translate(-150px,0)"
        navMenu.style.opacity = "0"
    }else{
        navMenu.style.transform = "translate(0,0)"
        navMenu.style.opacity = "1"
        testyFunction(tabletScreen)
    }
    // for tablet screen
})
// 
function tabletScreenFtnHideOrOpen(x){
    if((x.matchMedia || window.innerWidth <= 1024) && !(switchHideShow.checked)){
        navMenu.style.visibility = "hidden"
        navMenu.style.opacity = "0"
        navMenu.style.transform = "translate(-150px,0)"

    }
    if((window.innerWidth > 1024) && switchHideShow.checked){
        console.log("here")
        navMenu.style.visibility = "visible"
        navMenu.style.transform = "translate(0,0)"
        navMenu.style.opacity = "1"
    }
    
}
function testyFunction(x){
        navMenu.style.transform = "translate(0,0)"
        navMenu.style.visibility = "visible"
        navMenu.style.opacity = "1"
}
// for in mobile screen the nav should be visible 
function sliderOn(x){
    if(x.matches || window.innerHeight <= 425){
        navMenu.style.transform = "translate(0,0)"
        navMenu.style.visibility = "visible"
        navMenu.style.opacity = "1"
        switchHideShow.checked = true
    }
}
tabletScreen.addListener(tabletScreenFtnHideOrOpen)


// for mobile screen nav should be visible
sliderOn(mobileScreen)
mobileScreen.addListener(sliderOn)
// tabletScreen.addListener(testyFunction)