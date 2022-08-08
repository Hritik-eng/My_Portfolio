document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").style.display = "block";
    document.querySelector(".hamburger").style.display = "none";
    document.querySelector(".infoContainer").style.marginLeft = "5vw";
     document.querySelector(".infoContainer").style.width ="70vw";
     document.querySelector(".main2").style.width="80vw";
     
})

document.querySelector(".cross").addEventListener("click",()=>{
    document.querySelector(".sidebar").style.display = "none";
    document.querySelector(".hamburger").style.display = "block";
    document.querySelector(".infoContainer").style.width ="85vw";
})

let card1 = document.getElementsByClassName("card1");
let card2 = document.getElementsByClassName("card2");
let card3 = document.getElementsByClassName("card3");

Array.from(card1).forEach((e)=>{
    e.addEventListener("mouseover",(e1)=>{
        e1.target.style.width = "40vw";
        e1.target.style.zIndex = "100";
    })
})

Array.from(card1).forEach((e)=>{
    e.addEventListener("mouseout",(e1)=>{
        e1.target.style.width = "11vw";
        e1.target.style.zIndex = "0";
    })
})
Array.from(card2).forEach((e)=>{
    e.addEventListener("mouseover",(e1)=>{
        e1.target.style.width = "40vw";
        e1.target.style.zIndex = "100";
    })
})

Array.from(card2).forEach((e)=>{
    e.addEventListener("mouseout",(e1)=>{
        e1.target.style.width = "16vw";
        e1.target.style.zIndex = "0";
    })
})
Array.from(card3).forEach((e)=>{
    e.addEventListener("mouseover",(e1)=>{
        e1.target.style.width = "40vw";
        e1.target.style.zIndex = "100";
    })
})

Array.from(card3).forEach((e)=>{
    e.addEventListener("mouseout",(e1)=>{
        e1.target.style.width = "20vw";
        e1.target.style.zIndex = "0";
    })
})

// document.querySelector(".card").addEventListener("mouseover",(e)=>{
//         e.target.style.width = "30vw";
//         e.target.style.zIndex = "100";
// })

// document.querySelector(".card").addEventListener("mouseout",(e)=>{
//     e.target.style.width = "11.3vw";
//     e.target.style.zIndex = "0";

// })

// let card = document.getElementsByClassName("card");
// Array.from(card).forEach((e)=>{
// e.addEventListener("click",(e1)=>{
//         e1.target.style.width = "80vw";
//         e1.target.style.height = "100vh";
//         e1.target.style.zIndex = "100";
// })
// })


Array.from(card1).forEach((e)=>{
    e.addEventListener("touchstart",(e1)=>{
        e1.target.style.width = "40vw";
        e1.target.style.zIndex = "100";
    })
})

Array.from(card1).forEach((e)=>{
    e.addEventListener("touchend",(e1)=>{
        e1.target.style.width = "11vw";
        e1.target.style.zIndex = "0";
    })
})
Array.from(card2).forEach((e)=>{
    e.addEventListener("touchstart",(e1)=>{
        e1.target.style.width = "40vw";
        e1.target.style.zIndex = "100";
    })
})

Array.from(card2).forEach((e)=>{
    e.addEventListener("touchend",(e1)=>{
        e1.target.style.width = "16vw";
        e1.target.style.zIndex = "0";
    })
})
Array.from(card3).forEach((e)=>{
    e.addEventListener("touchstart",(e1)=>{
        e1.target.style.width = "40vw";
        e1.target.style.zIndex = "100";
    })
})

Array.from(card3).forEach((e)=>{
    e.addEventListener("touchend",(e1)=>{
        e1.target.style.width = "20vw";
        e1.target.style.zIndex = "0";
    })
})