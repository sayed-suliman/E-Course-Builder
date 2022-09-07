console.log("Your js file is working now successfully..!!")
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
// document.body.addEventListener('click', function(e){
//     if(e.target.className != "sidebar" && e.target.parentNode.className != "sidebar"){
//         document.getElementById("mySidebar").style.width = "20px";
//         bool = true
//         console.log("hekki")
//     }
//     console.log(e.target.parentNode.className)
//     console.log(e.target)
// }, true); 

// enabling tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))