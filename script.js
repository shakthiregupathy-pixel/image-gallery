const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;


function openLightbox(img) {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = Array.from(images).indexOf(img);
}

// Close lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}


function filterImages(category) {
    images.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
