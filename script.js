/* ===========================================
            PAGE LOADER
=========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.visibility = "hidden";

    loader.style.transition = "0.5s";

});


/* ===========================================
            DARK MODE
=========================================== */

const themeBtn = document.getElementById("themeBtn");

const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {

    body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

        localStorage.setItem("theme","dark");

    }else{

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

        localStorage.setItem("theme","light");

    }

});


/* ===========================================
            MOBILE MENU
=========================================== */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* ===========================================
            SEARCH BLOGS
=========================================== */

const search = document.getElementById("search");

const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", () => {

    let value = search.value.toLowerCase();

    cards.forEach(card => {

        let title = card.querySelector("h3").textContent.toLowerCase();

        let category = card.querySelector("span").textContent.toLowerCase();

        if(title.includes(value) || category.includes(value)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

});


/* ===========================================
        CATEGORY FILTER
=========================================== */

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.innerText.toLowerCase();

        cards.forEach(card => {

            if(category === "all"){

                card.style.display = "block";

            }

            else{

                if(card.classList.contains(category)){

                    card.style.display = "block";

                }

                else{

                    card.style.display = "none";

                }

            }

        });

    });

});


/* ===========================================
        BACK TO TOP BUTTON
=========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topBtn.style.display = "flex";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ===========================================
        NEWSLETTER
=========================================== */

const subscribeBtn = document.querySelector(".newsletter button");

const emailInput = document.querySelector(".newsletter input");

subscribeBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    if(email === ""){

        alert("Please enter your email.");

        return;

    }

    if(!email.includes("@") || !email.includes(".")){

        alert("Please enter a valid email.");

        return;

    }

    alert("🎉 Thank you for subscribing!");

    emailInput.value = "";

});


/* ===========================================
        SCROLL REVEAL ANIMATION
=========================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".card,.stats div,.newsletter").forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(40px)";

    item.style.transition="0.8s";

    observer.observe(item);

});


/* ===========================================
        ACTIVE NAV LINK
=========================================== */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ===========================================
        BLOG CARD HOVER
=========================================== */

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


/* ===========================================
        CONSOLE MESSAGE
=========================================== */

console.log("%cWelcome to TechBlog 🚀","color:#2563eb;font-size:20px;font-weight:bold;");