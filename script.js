'use strict';

const countEl = document.querySelector("#count-el");
const removeFromCart1 = document.querySelector("#remove-el1");
const removeFromCart2 = document.querySelector("#remove-el2");
const removeFromCart3 = document.querySelector("#remove-el3");
const removeFromCart4 = document.querySelector("#remove-el4");
const removeFromCart5 = document.querySelector("#remove-el5");
const removeFromCart6 = document.querySelector("#remove-el6");

const changeColor1 = document.querySelector("#color1");
const changeColor2 = document.querySelector("#color2");
const changeColor3 = document.querySelector("#color3");
const changeColor4 = document.querySelector("#color4");
const changeColor5 = document.querySelector("#color5");
const changeColor6 = document.querySelector("#color6");
const hide = document.querySelectorAll(".hidden");



let count = 0;
const message0 = "ADD TO CART"
const message = "REMOVE FROM CART";

// Increasing Number
const countNum = function() {
    count++;
    countEl.textContent = count;
}

// Decreasing Number
const decreaseNum = function() {
    count--;
    countEl.textContent = count;
}



removeFromCart1.addEventListener("click", function() {
    if (removeFromCart1.textContent === message0) {
        countNum();
        removeFromCart1.textContent = message;
        removeFromCart1.style.backgroundColor = "#ffcd9e";
        //removeFromCart1.style.width = '7rem';
        changeColor1.style.filter = "invert(30%) grayscale(100%)";
        hide[0].classList.remove('hidden');
        

    }else if (removeFromCart1.textContent === message) {
        decreaseNum();
        removeFromCart1.textContent = message0;
        removeFromCart1.style.backgroundColor = '#ff9a3d';
        changeColor1.style.filter = "";
        hide[0].classList.add('hidden');
    }
});


removeFromCart2.addEventListener("click", function() {
    if (removeFromCart2.textContent === message0) {
        countNum();
        removeFromCart2.textContent = message;
        removeFromCart2.style.backgroundColor = "#ffcd9e";
        changeColor2.style.filter = "invert(30%) grayscale(100%)";
        hide[1].classList.remove('hidden');

    } else if (removeFromCart2.textContent === message) {
        decreaseNum();
        removeFromCart2.textContent = message0;
        removeFromCart2.style.backgroundColor = '#ff9a3d';
        changeColor2.style.filter = "";
        hide[1].classList.add('hidden');
    }
    
});


removeFromCart3.addEventListener("click", function() {
    if (removeFromCart3.textContent === message0) {
        countNum();
        removeFromCart3.textContent = message;
        removeFromCart3.style.backgroundColor = "#ffcd9e";
        changeColor3.style.filter = "invert(30%) grayscale(100%)";
        hide[2].classList.remove('hidden');

    } else if (removeFromCart3.textContent === message) {
        decreaseNum();
        removeFromCart3.textContent = message0;
        removeFromCart3.style.backgroundColor = '#ff9a3d';
        changeColor3.style.filter = "";
        hide[2].classList.add('hidden');
    }
    
});


removeFromCart4.addEventListener("click", function() {
    if(removeFromCart4.textContent === message0) {
        countNum();
        removeFromCart4.textContent = message;
        removeFromCart4.style.backgroundColor = "#ffcd9e";
        changeColor4.style.filter = "invert(30%) grayscale(100%)";
        hide[3].classList.remove('hidden');

    }else if (removeFromCart4.textContent === message) {
        decreaseNum();
        removeFromCart4.textContent = message0;
        removeFromCart4.style.backgroundColor = '#ff9a3d';
        changeColor4.style.filter = "";
        hide[3].classList.add('hidden');
    }
    
});


removeFromCart5.addEventListener("click", function() {
    if (removeFromCart5.textContent === message0) {
        countNum();
        removeFromCart5.textContent = message;
        removeFromCart5.style.backgroundColor = "#ffcd9e";
        changeColor5.style.filter = "invert(30%)";
        hide[4].classList.remove('hidden');

    } else if (removeFromCart5.textContent === message) {
        decreaseNum();
        removeFromCart5.textContent = message0;
        removeFromCart5.style.backgroundColor = '#ff9a3d';
        changeColor5.style.filter = "";
        hide[4].classList.add('hidden');
    }
   
});


removeFromCart6.addEventListener("click", function() {
    if (removeFromCart6.textContent === message0) {
        countNum();
        removeFromCart6.textContent = message;
        removeFromCart6.style.backgroundColor = "#ffcd9e";
        changeColor6.style.filter = "invert(30%) grayscale(100%)";  
        hide[5].classList.remove('hidden');    
        

    } else if (removeFromCart6.textContent === message) {
        decreaseNum();
        removeFromCart6.textContent = message0;
        removeFromCart6.style.backgroundColor = '#ff9a3d';
        changeColor6.style.filter = "";
        hide[5].classList.add('hidden');
    }
    
})
