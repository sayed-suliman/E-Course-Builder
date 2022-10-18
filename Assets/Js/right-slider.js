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
        icon.style.width = "80px"
        text.innerText = 'Show'
    }else{
        icon.src ='../../Assets/Images/icons/hide-eye.svg'
        icon.style.padding = "0"
        icon.style.width = "71px"
        text.innerText = 'Hide'
    }
}
