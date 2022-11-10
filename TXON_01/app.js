// Event Handlers

window.addEventListener("scroll", scroll);

// Functions

function scroll() {

    let y = window.scrollY

    // About Section - Snowfall Animation

    const element = document.querySelector(".about-background")
    
    if(y > 1000) {
        element.style.bottom = "-10%";
        element.style.opacity = "0.3";
    }
    
    // Explore Section - Slide Animation

    console.log(y)
    const para = document.querySelector(".explore-bottom p")
    const img = document.querySelector(".explore-bottom img")

    if(y > 2250) {
        para.style.transform = "translateX(0%)";
        para.style.opacity = "1";

        img.style.transform = "translateX(0%)";
        img.style.opacity = "1";
    }

}

// Banner Section - Ski Slide Animation

let ski = document.querySelector(".ski-slide")

ski.style.right = "100%";

