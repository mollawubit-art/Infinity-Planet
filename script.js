function showMessage() {
    alert("Welcome to Infinity Planet 🌸 Beautiful Artificial Flowers!");
}


// Back to Top Button
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (topBtn) {
        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200
        ) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
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
    form.addEventListener("submit", function () {
        alert("✅ Thank you! Your message has been sent.");
    });
}


// Customer Counter
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

    const galleryImages =
        document.querySelectorAll(".gallery-container img");

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImg =
        document.getElementById("lightbox-img");

    const closeBtn =
        document.querySelector(".close");

    const nextBtn =
        document.querySelector(".next");

    const prevBtn =
        document.querySelector(".prev");

    let currentImageIndex = 0;


    // Open Image
    galleryImages.forEach(function (image, index) {

        image.addEventListener("click", function () {

            currentImageIndex = index;

            lightboxImg.src = image.src;
            lightboxImg.alt =
                image.alt || "Gallery Image";

            lightbox.style.display = "flex";

            setTimeout(function () {
                lightbox.classList.add("show");
            }, 10);

        });

    });


    // Show Image
    function showImage(index) {

        currentImageIndex =
            (index + galleryImages.length) %
            galleryImages.length;

        lightboxImg.src =
            galleryImages[currentImageIndex].src;

        lightboxImg.alt =
            galleryImages[currentImageIndex].alt ||
            "Gallery Image";

    }


    // Next Image
    nextBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        showImage(currentImageIndex + 1);

    });


    // Previous Image
    prevBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        showImage(currentImageIndex - 1);

    });


    // Close Button
    closeBtn.addEventListener("click", function () {

        lightbox.classList.remove("show");
        lightbox.style.display = "none";

    });


    // Close Outside
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("show");
            lightbox.style.display = "none";

        }

    });


    // Keyboard Controls
    document.addEventListener("keydown", function (event) {

        if (lightbox.style.display === "flex") {

            // Right Arrow
            if (event.key === "ArrowRight") {
                showImage(currentImageIndex + 1);
            }

            // Left Arrow
            if (event.key === "ArrowLeft") {
                showImage(currentImageIndex - 1);
            }

            // Escape
            if (event.key === "Escape") {

                lightbox.classList.remove("show");
                lightbox.style.display = "none";

            }

        }

    });

});
