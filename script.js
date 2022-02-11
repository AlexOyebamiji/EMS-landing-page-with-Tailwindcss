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
const hideEl = document.querySelectorAll(".hide");
const macEl = document.querySelector('.Mac');
const appleEl = document.querySelector('.Apple');
const samsungEl = document.querySelector('.Samsung');
const pixelEl = document.querySelector('.Pixel');
const airPods = document.querySelector('.Airpods');
const PS5 = document.querySelector('.PS5');
const removeMacEl = document.querySelector('.removeMac');
const removeAppleWatchEl = document.querySelector('.removeAppleWatch');
const removeSamsungTvEl = document.querySelector('.removeSamsungTv');
const removePixelEl = document.querySelector('.removePixel');
const removeAirpodEl = document.querySelector('.removeAirpod');
const removePS5El = document.querySelector('.removePS5');
const showEl = document.querySelector('.show');
const closeCartEl = document.querySelector('.closeCart');
const showCartEl = document.querySelector('.showCart');
const decreaseMacEl = document.querySelector('.decreaseMac');
const increaseMacEl = document.querySelector('.increaseMac');
const decreaseAppleEl = document.querySelector('.decreaseApple');
const increaseAppleEl = document.querySelector('.increaseApple');
const decreaseSamsungEl = document.querySelector('.decreaseSamsung');
const increaseSamsungEl = document.querySelector('.increaseSamsung');
const decreasePixelEl = document.querySelector('.decreasePixel');
const increasePixelEl = document.querySelector('.increasePixel');
const decreasePS5El = document.querySelector('.decreasePS5');
const increasePS5El = document.querySelector('.increasePS5');
const decreaseAirpodsEl = document.querySelector('.decreaseAirpods')
const increaseAirpodsEl = document.querySelector('.increaseAirpods')
const macOneEl = document.querySelector('.macOne');
const appleOneEl = document.querySelector('.appleOne');
const samsungOneEl = document.querySelector('.samsungOne')
const pixelOneEl = document.querySelector('.pixelOne');
const PS5OneEl = document.querySelector('.PS5One')
const airpodsOneEl = document.querySelector('.airpodsOne');
const multiplyPixelEl = document.querySelector('.multiplyPixel');
const multiplyAirpodsEl = document.querySelector('.multiplyAirpods');
const multiplyPS5El = document.querySelector('.multiplyPS5');
const multiplySamsungEl = document.querySelector('.multiplySamsung');
const multiplyAppleEl = document.querySelector('.multiplyApple');
const multiplyMacEl = document.querySelector('.multiplyMac');
const totalAmtEl = document.querySelector('.totalAmt');
const snEl = document.querySelectorAll('.sn');
const showMacEl = document.querySelector('.showMac');
const showPixelEl = document.querySelector('.showPixel');
const showAirpodsEl = document.querySelector('.showAirpods');
const showPS5EL = document.querySelector('.showPS5');
const showSamsungEl = document.querySelector('.showSamsung');
const showAppleEl = document.querySelector('.showApple');
const snMacEl = document.querySelector('.snMac');
const snPixelEl = document.querySelector('.snPixel');
const snAirpodsEl = document.querySelector('.snAirpods');
const snPS5EL = document.querySelector('.snPS5');
const snSamsungEl = document.querySelector('.snSamsung');
const snAppleEl = document.querySelector('.snApple');


// Initialization
let count = 0;
const message0 = "ADD TO CART"
const message = "REMOVE FROM CART";


const carts = [
    {
        gadget: "Pixel 4a",
        price: 280000
    },

    {
        gadget: "Samsung TV",
        price: 390000
    },

    {
        gadget: "Macbook Air",
        price: 800000
    },

    {
        gadget: "Apple Watch",
        price: 210000
    },

    {
        gadget: "Airpods",
        price: 200000
    },

    {
        gadget: "PS5",
        price: 650000
    }
];



// Show cart box
showEl.addEventListener('click', function() {
    showCartEl.classList.remove('hidden');
});

// Close Cart box with continue shopping btn
closeCartEl.addEventListener('click', function() {
    showCartEl.classList.add('hidden');
});

//Use escape button to close cart box
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if(!showCartEl.classList.contains('hidden')) {
            showCartEl.classList.add('hidden');
        }
    }
});

// Could not make onlclick to close modal

// document.addEventListener('click', function(event) {
//     console.log(event.target);
//     if (event.target == showCartEl) {
//         showCartEl.style.display = "none";
//     }
// })





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

// Increasing/Decreasing Mac Quantity
let macCount = 1;
const countMac = function() {
    macCount++;
    macOneEl.textContent = macCount;
}

const decreaseMac = function() {
    macCount--;
    macOneEl.textContent = macCount;
}



increaseMacEl.addEventListener('click', function() {
    countMac();
    const macIn = carts[2]["price"] * macOneEl.textContent;
    multiplyMacEl.textContent = macIn;   
    totalAmtEl.textContent = Number(carts[2]["price"]) + Number(totalAmtEl.textContent);
});


decreaseMacEl.addEventListener('click', function() {
    if (macOneEl.textContent <= 1) return
    decreaseMac()
    const macDec = multiplyMacEl.textContent - carts[2]["price"];
    multiplyMacEl.textContent = macDec
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(carts[2]["price"])
    
});


// Increasing/Decreasing Apple Quantity
let appleCount = 1;
const countApple = function() {
    appleCount++;
    appleOneEl.textContent = appleCount;
}

const decreaseApple = function() {
    appleCount--;
    appleOneEl.textContent = appleCount;
}

increaseAppleEl.addEventListener('click', function() {
    countApple();
    const appleIn = carts[3]["price"] * appleOneEl.textContent;
    multiplyAppleEl.textContent = appleIn;
    totalAmtEl.textContent = Number(carts[3]["price"]) + Number(totalAmtEl.textContent);
});


decreaseAppleEl.addEventListener('click', function() {
    if (appleOneEl.textContent <= 1) return
    decreaseApple();
    const appleDec = multiplyAppleEl.textContent - carts[3]["price"];
    multiplyAppleEl.textContent = appleDec;
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(carts[3]["price"]);
   
});


// Increasing/Decreasing Samsung Quantity
let samsungCount = 1;
const countSamsung = function() {
    samsungCount++;
    samsungOneEl.textContent = samsungCount;
}

const decreaseSamsung = function() {
    samsungCount--;
    samsungOneEl.textContent = samsungCount;
}

increaseSamsungEl.addEventListener('click', function() {
    countSamsung();
    const samsungIn = carts[1]["price"] * samsungOneEl.textContent;
    multiplySamsungEl.textContent = samsungIn;
    totalAmtEl.textContent = Number(carts[1]["price"]) + Number(totalAmtEl.textContent);
    
});

decreaseSamsungEl.addEventListener('click', function() {
    if (samsungOneEl.textContent <= 1) return
    decreaseSamsung();
    const samsungDec = multiplySamsungEl.textContent - carts[1]["price"];
    multiplySamsungEl.textContent = samsungDec
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(carts[1]["price"]) ;
});

// Increasing/Decreasing Pixel Quantity
let pixelCount = 1;

const countPixel = function() {
    pixelCount++;
    pixelOneEl.textContent = pixelCount;
    

}

const decreasePixel = function() {
    pixelCount--;
    pixelOneEl.textContent = pixelCount;
}

increasePixelEl.addEventListener('click', function() {
    countPixel();
    const pixelIn = carts[0]["price"] * pixelOneEl.textContent;
    multiplyPixelEl.textContent = pixelIn;
    totalAmtEl.textContent = Number(carts[0]["price"]) + Number(totalAmtEl.textContent);
});


decreasePixelEl.addEventListener('click', function() {
    if (pixelOneEl.textContent <= 1) return
    decreasePixel();
    const pixelDec = multiplyPixelEl.textContent - carts[0]["price"];
    multiplyPixelEl.textContent = pixelDec ;
    totalAmtEl.textContent =  Number(totalAmtEl.textContent) - Number(carts[0]["price"]);
});



// Increasing/Decreasing Airpod Quantity

let airpodCount = 1;
const countAirpod = function() {
    airpodCount++;
    airpodsOneEl.textContent = airpodCount
}

const decreaseAirpod = function() {
    airpodCount--;
    airpodsOneEl.textContent = airpodCount;
}


increaseAirpodsEl.addEventListener('click', function() {
    countAirpod();
    const airpodIn = carts[4]["price"] * airpodsOneEl.textContent;
    multiplyAirpodsEl.textContent = airpodIn;
    totalAmtEl.textContent = Number(carts[4]["price"]) + Number(totalAmtEl.textContent);
});

decreaseAirpodsEl.addEventListener('click', function() {
    if (airpodsOneEl.textContent <= 1) return
    decreaseAirpod();
    const airpodDec = multiplyAirpodsEl.textContent - carts[4]["price"];
    multiplyAirpodsEl.textContent = airpodDec;
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(carts[4]["price"]);
});


// Increasing/Decreasing PS5 Quantity
let ps5Count = 1;
const countPS5 = function() {
    ps5Count++;
    PS5OneEl.textContent = ps5Count;
    
}

const decreasePS5 = function() {
    ps5Count--;
    PS5OneEl.textContent = ps5Count;
}

increasePS5El.addEventListener('click', function() {
    countPS5();
    const ps5In = carts[5]["price"] * PS5OneEl.textContent;
    multiplyPS5El.textContent = ps5In;
    totalAmtEl.textContent = Number(carts[5]["price"]) + Number(totalAmtEl.textContent);
});


decreasePS5El.addEventListener('click', function() {
    if (PS5OneEl.textContent <= 1) return;
    decreasePS5();
    const ps5Dec = multiplyPS5El.textContent - carts[5]["price"]
    multiplyPS5El.textContent = ps5Dec
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(carts[5]["price"]);
});


// Function to remove from cart

const removeMac = function() {
    macCount = 1;
    decreaseNum();
    removeFromCart4.textContent = message0;
    removeFromCart4.style.backgroundColor = '#ff9a3d';
    changeColor4.style.filter = "";
    hideEl[3].classList.add('hidden');
    macEl.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number((carts[2]["price"]) * (macOneEl.textContent));
    macOneEl.textContent = macCount;
    multiplyMacEl.textContent = carts[2]["price"];
};

const removeAppleWatch = function() {
    appleCount = 1;
    decreaseNum();
    removeFromCart5.textContent = message0;
    removeFromCart5.style.backgroundColor = '#ff9a3d';
    changeColor5.style.filter = "";
    hideEl[4].classList.add('hidden');
    appleEl.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number((carts[3]["price"]) * (appleOneEl.textContent));
    appleOneEl.textContent = appleCount;
    multiplyAppleEl.textContent = carts[3]["price"];
};

const removeSamsungTv = function() {
    samsungCount = 1;
    decreaseNum();
    removeFromCart1.textContent = message0;
    removeFromCart1.style.backgroundColor = '#ff9a3d';
    changeColor1.style.filter = "";
    hideEl[0].classList.add('hidden');
    samsungEl.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number((carts[1]["price"]) * (samsungOneEl.textContent));
    samsungOneEl.textContent = samsungCount;
    multiplySamsungEl.textContent = carts[1]["price"];
};

const removePixel = function() {
    pixelCount = 1;
    decreaseNum();
    removeFromCart2.textContent = message0;
    removeFromCart2.style.backgroundColor = '#ff9a3d';
    changeColor2.style.filter = "";
    hideEl[1].classList.add('hidden');
    pixelEl.classList.add('hidden');
    totalAmtEl.textContent =  Number(totalAmtEl.textContent) - Number((carts[0]["price"]) * (pixelOneEl.textContent));
    pixelOneEl.textContent = pixelCount;
    multiplyPixelEl.textContent = carts[0]["price"];
};

const removeAirpod = function() {
    airpodCount = 1;
    decreaseNum();
    removeFromCart6.textContent = message0;
    removeFromCart6.style.backgroundColor = '#ff9a3d';
    changeColor6.style.filter = "";
    hideEl[5].classList.add('hidden');
    airPods.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number((carts[4]["price"]) * (airpodsOneEl.textContent));
    airpodsOneEl.textContent = airpodCount;
    multiplyAirpodsEl.textContent = carts[4]["price"];
};


const removePS5 = function() {
    ps5Count = 1;
    decreaseNum();
    removeFromCart3.textContent = message0;
    removeFromCart3.style.backgroundColor = '#ff9a3d';
    changeColor3.style.filter = "";
    hideEl[2].classList.add('hidden');
    PS5.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number((carts[5]["price"]) * (PS5OneEl.textContent));
    PS5OneEl.textContent = ps5Count;
    multiplyPS5El.textContent = carts[5]["price"];
};




removeFromCart1.addEventListener("click", function() {
    if (removeFromCart1.textContent === message0) {
        countNum();
        removeFromCart1.textContent = message;
        removeFromCart1.style.backgroundColor = "#ffcd9e";
        changeColor1.style.filter = "invert(30%) grayscale(100%)";
        hideEl[0].classList.remove('hidden');
        samsungEl.classList.remove('hidden');
        showSamsungEl.textContent = carts[1]["gadget"];
        multiplySamsungEl.textContent = carts[1]["price"];
        totalAmtEl.textContent = Number(carts[1]["price"]) + Number(totalAmtEl.textContent);
        
    } else if (removeFromCart1.textContent === message) {
        removeSamsungTv();
    }
});




removeFromCart2.addEventListener("click", function() {
    if (removeFromCart2.textContent === message0) {
        countNum();
        removeFromCart2.textContent = message;
        removeFromCart2.style.backgroundColor = "#ffcd9e";
        changeColor2.style.filter = "invert(30%) grayscale(100%)";
        hideEl[1].classList.remove('hidden');
        pixelEl.classList.remove('hidden');
        showPixelEl.textContent = carts[0]["gadget"] 
        multiplyPixelEl.textContent = carts[0]["price"];
        totalAmtEl.textContent = Number(carts[0]["price"]) + Number(totalAmtEl.textContent);
        

    } else if (removeFromCart2.textContent === message) {
        removePixel();
    }
    
});


removeFromCart3.addEventListener("click", function() {
    if (removeFromCart3.textContent === message0) {
        countNum();
        removeFromCart3.textContent = message;
        removeFromCart3.style.backgroundColor = "#ffcd9e";
        changeColor3.style.filter = "invert(30%) grayscale(100%)";
        hideEl[2].classList.remove('hidden');
        PS5.classList.remove('hidden');
        showPS5EL.textContent = carts[5]["gadget"];
        multiplyPS5El.textContent = carts[5]["price"];
        totalAmtEl.textContent = Number(carts[5]["price"]) + Number(totalAmtEl.textContent);

    } else if (removeFromCart3.textContent === message) {
        removePS5();
    }
    
});


removeFromCart4.addEventListener("click", function() {
    if(removeFromCart4.textContent === message0) {
        countNum();
        removeFromCart4.textContent = message;
        removeFromCart4.style.backgroundColor = "#ffcd9e";
        changeColor4.style.filter = "invert(30%) grayscale(100%)";
        hideEl[3].classList.remove('hidden');
        macEl.classList.remove('hidden');
        showMacEl.textContent = carts[2]["gadget"];
        multiplyMacEl.textContent = carts[2]["price"];
        totalAmtEl.textContent = Number(carts[2]["price"]) + Number(totalAmtEl.textContent);

    }else if (removeFromCart4.textContent === message) {
        removeMac();
    }
    
});


removeFromCart5.addEventListener("click", function() {
    if (removeFromCart5.textContent === message0) {
        countNum();
        removeFromCart5.textContent = message;
        removeFromCart5.style.backgroundColor = "#ffcd9e";
        changeColor5.style.filter = "invert(30%)";
        hideEl[4].classList.remove('hidden');
        appleEl.classList.remove('hidden');
        multiplyAppleEl.textContent = carts[3]["price"];
        showAppleEl.textContent = carts[3]["gadget"];
        totalAmtEl.textContent = Number(carts[3]["price"]) + Number(totalAmtEl.textContent);
    } else if (removeFromCart5.textContent === message) {
        removeAppleWatch();
    }
   
});


removeFromCart6.addEventListener("click", function() {
    if (removeFromCart6.textContent === message0) {
        countNum();
        removeFromCart6.textContent = message;
        removeFromCart6.style.backgroundColor = "#ffcd9e";
        changeColor6.style.filter = "invert(30%) grayscale(100%)";  
        hideEl[5].classList.remove('hidden');    
        airPods.classList.remove('hidden');
        showAirpodsEl.textContent = carts[4]["gadget"];
        multiplyAirpodsEl.textContent = carts[4]["price"];
        totalAmtEl.textContent = Number(carts[4]["price"]) + Number(totalAmtEl.textContent)
        

    } else if (removeFromCart6.textContent === message) {
        removeAirpod();
    }
        
    
});


// Removing element from cart button

// Remove Macbook Air
removeMacEl.addEventListener('click', function() {
    removeMac();
});

// Remove Apple Watch
removeAppleWatchEl.addEventListener('click', function() {
    removeAppleWatch();
});

// Remove Samsung Tv
removeSamsungTvEl.addEventListener('click', function() {
    removeSamsungTv();
});

// Remove Pixel
removePixelEl.addEventListener('click', function() {
    removePixel();
});

// Remove Airpod
removeAirpodEl.addEventListener('click', function() {
    removeAirpod();
});

// Remove PS5
removePS5El.addEventListener('click', function() {
    removePS5();
});



// var products = [{
//     index: 1,
//     id: 'p1',
//     name: 'Samsung TV',
//     price: 500000
// },
// {
//     index: 2,
//     id: 'p2',
//     name: 'Pixel 4a',
//     price: 250000
// },
// {
//     index: 3,
//     id: 'p3',
//     name: 'PS 5',
//     price: 300000
// },
// {
//     index: 4,
//     id: 'p4',
//     name: 'MacBook Air',
//     price: 800000
// },
// {
//     index: 5,
//     id: 'p5',
//     name: 'Apple Watch',
//     price: 95000
// },
// {
//     index: 6,
//     id: 'p6',
//     name: 'Air Pods',
//     price: 75000
// },

// ]

// let a = products[0]["name"];
// console.log(a);