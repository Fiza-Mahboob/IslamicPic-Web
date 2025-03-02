
/* script.js */
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // If user scrolls down 50px
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Hero Section Text Change Effect
    const words = ["Patterns","Wallpaper", "Calligraphy", "Images"];
    let index = 0;
    const changingText = document.querySelector(".changing-text");

    function changeText() {
        changingText.textContent = words[index];
        index = (index + 1) % words.length;
    }
    setInterval(changeText, 2000);
})

document.addEventListener("DOMContentLoaded", () => {
    // DOWNLOAD BUTTON FUNCTIONALITY
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            let image = event.target.closest(".image-card").querySelector("img").src;
            let link = document.createElement("a");
            link.href = image;
            link.download = image.split("/").pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    // THREE-DOT MENU FUNCTIONALITY
    document.querySelectorAll(".menu-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            let menuContainer = event.target.closest(".menu-container");
            menuContainer.classList.toggle("active");
        });
    });
   

    // COPY EMBED CODE FUNCTIONALITY
    document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            let image = event.target.closest(".image-card").querySelector("img").src;
            let embedCode = `<img src="${image}" alt="Islamic Image">`;
            navigator.clipboard.writeText(embedCode).then(() => {
                alert("Embed code copied to clipboard!");
            });
        });
    });

    // SHARE BUTTON FUNCTIONALITY
    document.querySelectorAll(".share-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            let image = event.target.closest(".image-card").querySelector("img").src;
            if (navigator.share) {
                navigator.share({
                    title: "Check out this Islamic Image",
                    url: image
                }).catch(err => console.error("Error sharing:", err));
            } else {
                alert("Sharing not supported in this browser.");
            }
        });
    });

    // SAVE BUTTON FUNCTIONALITY (Just alert for now)
    document.querySelectorAll(".save-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Image saved successfully!");
        });
    });

    // CLOSE MENU WHEN CLICKING OUTSIDE
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".menu-container")) {
            document.querySelectorAll(".menu-container").forEach(menu => {
                menu.classList.remove("active");
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cardsContainer = document.querySelector(".cards");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    // Scroll width
    const scrollAmount = 250; 

    prevButton.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});
