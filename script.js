// show and hide the hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})

// show an alert when the contact form button is clicked

function showMessage() {
    alert(`This is not a functional SMTP request. It is for educational purposes only.`);
}

// accordion box click event listeners

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});