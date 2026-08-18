function showMessage() {
    alert("Welcome to Infinity Planet 🌸 Beautiful Artificial Flowers!");
}


// Back to Top Button
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};


// Go to Top
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Contact Form
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function() {
        alert("✅ Thank you! Your message has been sent.");
    });
}
let count = 0;
const customerCount = document.getElementById("customerCount");

if (customerCount) {
    const counter = setInterval(() => {
        count++;
        customerCount.textContent = count + "+";

        if (count >= 500) {
            clearInterval(counter);
        }
    }, 10);
}
// Gallery Image Lightbox
document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(".gallery-container img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentImageIndex = 0;

    galleryImages.forEach(function (image, index) {
        image.addEventListener("click", function () {
            currentImageIndex = index;
            lightbox.style.display = "flex";
            lightboxImg.src = image.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    nextBtn.addEventListener("click", function () {
        currentImageIndex++;

        if (currentImageIndex >= galleryImages.length) {
            currentImageIndex = 0;
        }

        lightboxImg.src = galleryImages[currentImageIndex].src;
    });

    prevBtn.addEventListener("click", function () {
        currentImageIndex--;

        if (currentImageIndex < 0) {
            currentImageIndex = galleryImages.length - 1;
        }

        lightboxImg.src = galleryImages[currentImageIndex].src;
    });

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

});
