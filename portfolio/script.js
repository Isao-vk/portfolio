/* =========================================
   VIGNESH JR - CYBERPUNK PORTFOLIO
   SCRIPT.JS
========================================= */


/* =========================================
   LOADING SCREEN
========================================= */

window.addEventListener("load", function(){

    const loader = document.getElementById("loader");

    setTimeout(function(){

        loader.style.opacity = "0";

        loader.style.transition = "opacity 0.6s ease";

        setTimeout(function(){

            loader.style.display = "none";

        },600);

    },1200);

});


/* =========================================
   TERMINAL TYPING EFFECT
========================================= */

const commandElement =
document.getElementById("command");

const commands = [

    "whoami",

    "scan --network",

    "check --security",

    "build --secure"

];

let commandIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeCommand(){

    if(!commandElement){

        return;

    }


    const currentCommand =
    commands[commandIndex];


    if(!deleting){

        commandElement.textContent =
        currentCommand.substring(
            0,
            characterIndex
        );

        characterIndex++;


        if(
            characterIndex >
            currentCommand.length
        ){

            deleting = true;

            setTimeout(
                typeCommand,
                1200
            );

            return;

        }

    }

    else{

        commandElement.textContent =
        currentCommand.substring(
            0,
            characterIndex
        );

        characterIndex--;


        if(characterIndex < 0){

            deleting = false;

            commandIndex++;

            characterIndex = 0;


            if(
                commandIndex >=
                commands.length
            ){

                commandIndex = 0;

            }

        }

    }


    setTimeout(

        typeCommand,

        deleting ? 60 : 120

    );

}


typeCommand();


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
document.querySelector(".menu-btn");

const navigation =
document.querySelector(".navbar nav");


if(menuButton){

    menuButton.addEventListener(
        "click",
        function(){

            navigation.classList.toggle(
                "active"
            );


            const icon =
            menuButton.querySelector("i");


            if(
                navigation.classList.contains(
                    "active"
                )
            ){

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            }

            else{

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document
.querySelectorAll(".navbar nav a")
.forEach(function(link){

    link.addEventListener(
        "click",
        function(){

            navigation.classList.remove(
                "active"
            );


            const icon =
            menuButton.querySelector("i");


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }
    );

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
document.querySelectorAll(

    ".section-title," +

    ".about-text," +

    ".about-terminal," +

    ".skill-card," +

    ".project-card," +

    ".contact-text," +

    "#contactForm"

);


revealElements.forEach(function(element){

    element.style.opacity = "0";

    element.style.transform =
    "translateY(40px)";

    element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

});


function revealOnScroll(){

    const screenHeight =
    window.innerHeight;


    revealElements.forEach(
        function(element){

            const elementTop =
            element.getBoundingClientRect().top;


            if(
                elementTop <
                screenHeight - 80
            ){

                element.style.opacity = "1";

                element.style.transform =
                "translateY(0)";

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    function(){

        if(window.scrollY > 50){

            navbar.style.background =
            "rgba(3,3,3,0.96)";

            navbar.style.boxShadow =
            "0 5px 25px rgba(255,0,60,0.08)";

        }

        else{

            navbar.style.background =
            "rgba(5,5,5,0.85)";

            navbar.style.boxShadow =
            "none";

        }

    }
);


/* =========================================
   CYBER CURSOR
========================================= */

const cursor =
document.createElement("div");


cursor.id =
"cyberCursor";


document.body.appendChild(cursor);


const cursorStyle =
document.createElement("style");


cursorStyle.textContent = `

#cyberCursor{

    position:fixed;

    width:18px;

    height:18px;

    border:1px solid #ff003c;

    border-radius:50%;

    pointer-events:none;

    z-index:99999;

    transform:translate(-50%,-50%);

    box-shadow:
        0 0 12px rgba(255,0,60,.5);

    transition:
        width .15s,
        height .15s,
        background .15s;

}

`;

document.head.appendChild(
    cursorStyle
);


document.addEventListener(
    "mousemove",
    function(event){

        cursor.style.left =
        event.clientX + "px";

        cursor.style.top =
        event.clientY + "px";

    }
);


/* =========================================
   CURSOR HOVER EFFECT
========================================= */

const hoverElements =
document.querySelectorAll(
    "a,button,.skill-card,.project-card"
);


hoverElements.forEach(
    function(element){

        element.addEventListener(
            "mouseenter",
            function(){

                cursor.style.width =
                "35px";

                cursor.style.height =
                "35px";

                cursor.style.background =
                "rgba(255,0,60,.12)";

            }
        );


        element.addEventListener(
            "mouseleave",
            function(){

                cursor.style.width =
                "18px";

                cursor.style.height =
                "18px";

                cursor.style.background =
                "transparent";

            }
        );

    }
);


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
document.getElementById(
    "contactForm"
);


if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            const button =
            contactForm.querySelector(
                "button"
            );


            const originalText =
            button.innerHTML;


            button.innerHTML =
            '<i class="fa-solid fa-check"></i> MESSAGE READY';


            button.style.background =
            "#00ff88";

            button.style.borderColor =
            "#00ff88";

            button.style.color =
            "#000";


            setTimeout(
                function(){

                    button.innerHTML =
                    originalText;

                    button.style.background =
                    "";

                    button.style.borderColor =
                    "";

                    button.style.color =
                    "";

                    contactForm.reset();

                },

                2500

            );

        }
    );

}


/* =========================================
   PROJECT CARD CLICK EFFECT
========================================= */

const projectCards =
document.querySelectorAll(
    ".project-card"
);


projectCards.forEach(
    function(card){

        card.addEventListener(
            "mouseenter",
            function(){

                card.style.transform =
                "translateY(-10px)";

            }
        );


        card.addEventListener(
            "mouseleave",
            function(){

                card.style.transform =
                "translateY(0)";

            }
        );

    }
);


/* =========================================
   TERMINAL GLITCH EFFECT
========================================= */

const heroTitle =
document.querySelector(".hero h1");


setInterval(
    function(){

        if(!heroTitle){

            return;

        }


        heroTitle.style.textShadow =
        `
        2px 0 #ff003c,
        -2px 0 #00ff88
        `;


        setTimeout(
            function(){

                heroTitle.style.textShadow =
                "none";

            },

            100

        );

    },

    3500

);


/* =========================================
   CURRENT YEAR
========================================= */

const footer =
document.querySelector("footer");


if(footer){

    const year =
    new Date().getFullYear();

    footer.innerHTML =
    footer.innerHTML.replace(
        "2026",
        year
    );

}


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
"%c VIGNESH JR ",
"background:#ff003c;color:white;font-size:20px;font-weight:bold;padding:8px;"
);


console.log(
"%c Cyber Security Portfolio Loaded Successfully ",
"color:#00ff88;font-size:14px;"
);