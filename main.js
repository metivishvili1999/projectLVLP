// Function for navigation between weekly promotion tabs
function weeklyPromotions(evt, promotionsName) {
    var i, promotions, tabs;
    promotions = document.getElementsByClassName("promotions");
    for (i = 0; i < promotions.length; i++) {
        promotions[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(promotionsName).style.display = "flex";
    evt.currentTarget.className += " active";

}

// Slider Function
const slider = document.querySelector('.slider-inner');
const progressBar = document.querySelector('.prog-bar-inner');

let sliderGrabbed = false;

slider.parentElement.addEventListener('scroll', (e) => {
    progressBar.style.width = `${getScrollPercentage()}%`
})

slider.addEventListener('mousedown', (e) => {
    sliderGrabbed = true;
    slider.style.cursor = 'grabbing';
})

slider.addEventListener('mouseup', (e) => {
    sliderGrabbed = false;
    slider.style.cursor = 'grab';
})

slider.addEventListener('mouseleave', (e) => {
    sliderGrabbed = false;
})

slider.addEventListener('mousemove', (e) => {
    if (sliderGrabbed) {
        slider.parentElement.scrollLeft -= e.movementX;
    }
})

slider.addEventListener('wheel', (e) => {
    e.preventDefault()
    slider.parentElement.scrollLeft += e.deltaY;
})

function getScrollPercentage() {
    return ((slider.parentElement.scrollLeft / (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) * 100);
}