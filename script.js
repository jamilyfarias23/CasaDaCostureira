/*==========================================
    CASA DA COSTUREIRA
    script.js
==========================================*/

// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 800);

});

// ==============================
// NAVBAR
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-scroll");

    } else {

        navbar.classList.remove("navbar-scroll");

    }

});

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnTop.classList.add("show");

    } else {

        btnTop.classList.remove("show");

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==============================
// FECHAR MENU MOBILE
// ==============================

const navLinks = document.querySelectorAll(".nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();

        }

    });

});

// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

//=========================================
// PESQUISA DE PRODUTOS
//=========================================




//=========================================
// FILTRO POR CATEGORIA
//=========================================



//=========================================
// BOTÃO WHATSAPP PULSANDO
//=========================================

const whatsapp = document.querySelector(".floating-whatsapp");

if (whatsapp) {

    setInterval(() => {

        whatsapp.classList.toggle("pulse");

    }, 2000);

}

//=========================================
// CONTADORES ANIMADOS
//=========================================

const counters = document.querySelectorAll(".counter");

const speed = 40;

counters.forEach(counter => {

    const update = () => {

        const target = +counter.dataset.target;

        const count = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(update, 35);

        } else {

            counter.innerText = target;

        }

    };

    update();

});

//=========================================
// SWIPER (caso adicione um carrossel)
//=========================================

if (document.querySelector(".swiper")) {

    new Swiper(".swiper", {

        loop: true,

        autoplay: {

            delay: 3500,

            disableOnInteraction: false

        },

        spaceBetween: 30,

        pagination: {

            el: ".swiper-pagination",

            clickable: true

        },

        breakpoints: {

            0: {

                slidesPerView: 1

            },

            768: {

                slidesPerView: 2

            },

            1200: {

                slidesPerView: 3

            }

        }

    });

}

//=========================================
// REVELAR ELEMENTOS AO ROLAR
//=========================================

const revealElements = document.querySelectorAll(
    ".feature-box, .product-card, .brand-card, .contact-card"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if (top < visible) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


//====================================================
// ANIMAÇÃO DOS NÚMEROS (caso utilize contadores)
//====================================================

const observerCounter = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let value = 0;

            const speed = target / 80;

            const update = () => {

                value += speed;

                if(value < target){

                    counter.innerText = Math.floor(value);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

            observerCounter.unobserve(counter);

        }

    });

});

document.querySelectorAll(".counter").forEach(counter=>{

    observerCounter.observe(counter);

});

//====================================================
// EFEITO PARALLAX NO HERO
//====================================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const scroll = window.pageYOffset;

    if(hero){

        hero.style.backgroundPositionY = scroll * 0.5 + "px";

    }

});

//====================================================
// EFEITO DE APARECER SUAVEMENTE
//====================================================

const reveal = document.querySelectorAll(".reveal");

const revealFunction = ()=>{

    reveal.forEach(item=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealFunction);

revealFunction();

//====================================================
// BOTÃO WHATSAPP COM LEVE ANIMAÇÃO
//====================================================

const btnWhatsapp = document.querySelector(".floating-whatsapp");

if(btnWhatsapp){

    setInterval(()=>{

        btnWhatsapp.animate([

            {transform:"scale(1)"},

            {transform:"scale(1.12)"},

            {transform:"scale(1)"}

        ],{

            duration:700

        });

    },3500);

}

//====================================================
// ANO AUTOMÁTICO NO RODAPÉ
//====================================================

const year = document.querySelector("#year");

if(year){

    year.innerHTML = new Date().getFullYear();

}

//====================================================
// MENSAGEM NO CONSOLE
//====================================================

console.log("%cCasa da Costureira","font-size:28px;color:#9E1B32;font-weight:bold;");
console.log("%cSite desenvolvido com HTML, CSS e JavaScript.","color:#555;font-size:14px;");

//==================================================
// EFEITO DE DIGITAÇÃO NO HERO
//==================================================

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){

    const textoOriginal = heroTitle.innerHTML;

    heroTitle.innerHTML = "";

    let i = 0;

    function escrever(){

        if(i < textoOriginal.length){

            heroTitle.innerHTML += textoOriginal.charAt(i);

            i++;

            setTimeout(escrever,25);

        }

    }

    escrever();

}

//==================================================
// MUDAR COR DA NAVBAR CONFORME A SEÇÃO
//==================================================

const sections = document.querySelectorAll("section");

const navLi = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLi.forEach(li=>{

        li.classList.remove("active");

        if(li.getAttribute("href") == "#" + current){

            li.classList.add("active");

        }

    });

});

//==================================================
// SCROLL SUAVE
//==================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

//==================================================
// PRELOAD DAS IMAGENS
//==================================================

window.addEventListener("load",()=>{

    document.querySelectorAll("img").forEach(img=>{

        const image=new Image();

        image.src=img.src;

    });

});

//==================================================
// MENSAGEM FINAL
//==================================================

console.log("🧵 Casa da Costureira");
console.log("❤️ Site desenvolvido especialmente para a loja.");



