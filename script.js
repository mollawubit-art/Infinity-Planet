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
const galleryImages = document.querySelectorAll(".gallery-container img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        lightbox.style.display = "flex";
        lightboxImg.src = this.src;
    });
});

closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});
