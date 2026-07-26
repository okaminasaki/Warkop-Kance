// ===============================
// WARKOP KANCE JAVASCRIPT
// ===============================



// ===============================
// AOS ANIMATION
// ===============================

AOS.init({

    duration:1000,
    once:true

});




// ===============================
// REMOVE LOADER
// ===============================

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    loader.style.opacity="0";

    setTimeout(()=>{

        loader.style.display="none";

    },500);

});




// ===============================
// MOBILE NAVBAR
// ===============================


const menuBtn = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{


    navMenu.classList.toggle("active");


});



// Tutup menu setelah klik link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navMenu.classList.remove("active");


    });


});






// ===============================
// NAVBAR EFFECT SCROLL
// ===============================


const navbar = document.querySelector(".navbar");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        navbar.style.background="rgba(18,13,9,0.95)";

        navbar.style.borderRadius="20px";

        navbar.style.padding="0 25px";


    }else{


        navbar.style.background="transparent";


    }


});







// ===============================
// BACK TO TOP
// ===============================


const backTop = document.getElementById("backTop");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){


        backTop.style.display="flex";


    }else{


        backTop.style.display="none";


    }


});



backTop.addEventListener("click",()=>{


    window.scrollTo({


        top:0,

        behavior:"smooth"


    });


});







// ===============================
// RESERVATION FORM
// ===============================


const form = document.querySelector(".reservation-form");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(

    "Terima kasih! Reservasi Warkop Kance berhasil dikirim."

    );


    form.reset();


});







// ===============================
// IMAGE LIGHTBOX GALLERY
// ===============================


const galleryImages = document.querySelectorAll(".gallery-grid img");



galleryImages.forEach(image=>{


    image.addEventListener("click",()=>{


        const popup=document.createElement("div");


        popup.classList.add("image-popup");



        popup.innerHTML=`

        <img src="${image.src}">

        `;



        document.body.appendChild(popup);



        popup.addEventListener("click",()=>{


            popup.remove();


        });


    });


});






// ===============================
// MENU CARD ANIMATION
// ===============================


const cards=document.querySelectorAll(".menu-card");



cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.style.transition=".4s";


    });


});






// ===============================
// TYPING EFFECT HERO
// ===============================


const text="Tempat Nongkrong Favorit Bersama Kawan";


let index=0;



function typing(){


    const element=document.querySelector(".hero-content p");


    if(index < text.length){


        element.innerHTML += text.charAt(index);


        index++;


        setTimeout(typing,60);


    }


}



// Jalankan setelah halaman siap

setTimeout(()=>{


    typing();


},1500);