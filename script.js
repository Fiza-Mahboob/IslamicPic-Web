// document.addEventListener("DOMContentLoaded", function () {
//     const words = ["Illustrations", "Calligraphy", "3D Renders", "Images"];
//     let index = 0;
//     const changingText = document.querySelector(".changing-text");

//     function changeText() {
//         changingText.style.opacity = 0; // Fade out
//         setTimeout(() => {
//             changingText.textContent = words[index];
//             changingText.style.opacity = 1; // Fade in
//             index = (index + 1) % words.length;
//         }, 300);
//     }

//     setInterval(changeText, 2000);
// });
/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    // Hero Section Text Change Effect
    const words = ["illustrations", "Calligraphy", "3D Renders", "Images"];
    let index = 0;
    const changingText = document.querySelector(".changing-text");

    function changeText() {
        changingText.textContent = words[index];
        index = (index + 1) % words.length;
    }
    setInterval(changeText, 2000);
})
//     // Card Slider Functionality
//     const slider = document.querySelector(".cards");
//     const prevArrow = document.querySelector(".prev-arrow");
//     const nextArrow = document.querySelector(".next-arrow");
    
//     let scrollAmount = 0;
//     const scrollStep = 200;

//     nextArrow.addEventListener("click", function () {
//         slider.scrollBy({ left: scrollStep, behavior: "smooth" });
//     });

//     prevArrow.addEventListener("click", function () {
//         slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
//     });

//     // Download Button Functionality
//     document.querySelectorAll(".download").forEach(button => {
//         button.addEventListener("click", function () {
//             alert("Download started!"); // Replace with actual download functionality
//         });
//     });

//     // Options (Share, Download, Copy) Functionality
//     document.querySelectorAll(".options").forEach(menu => {
//         menu.addEventListener("click", function () {
//             const optionsDiv = document.createElement("div");
//             optionsDiv.className = "options-menu";
//             optionsDiv.innerHTML = `<ul>
//                 <li class='share'>Share</li>
//                 <li class='download'>Download</li>
//                 <li class='copy'>Copy</li>
//             </ul>`;
            
//             this.parentElement.appendChild(optionsDiv);
            
//             optionsDiv.querySelector(".share").addEventListener("click", () => alert("Share functionality"));
//             optionsDiv.querySelector(".download").addEventListener("click", () => alert("Download functionality"));
//             optionsDiv.querySelector(".copy").addEventListener("click", () => {
//                 navigator.clipboard.writeText("Embedded code copied!");
//                 alert("Copied to clipboard");
//             });
            
//             setTimeout(() => optionsDiv.remove(), 3000);
//         });
//     });
// });
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
