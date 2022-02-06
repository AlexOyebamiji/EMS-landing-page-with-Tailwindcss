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


let multiplyPixelEl = document.querySelector('.multiplyPixel');
let multiplyAirpodsEl = document.querySelector('.multiplyAirpods');
let multiplyPS5El = document.querySelector('.multiplyPS5');
let multiplySamsungEl = document.querySelector('.multiplySamsung');
let multiplyAppleEl = document.querySelector('.multiplyApple');
let multiplyMacEl = document.querySelector('.multiplyMac');


const totalAmtEl = document.querySelector('.totalAmt')



let count = 0;
const message0 = "ADD TO CART"
const message = "REMOVE FROM CART";
const increase = '+';
const decrease = '-';

const amount = {
    pixel: 280000,
    airpods: 200000,
    ps5: 650000,
    samsung: 390000,
    apple: 210000,
    macbook: 800000,
};


// Show cart box
// showEl.addEventListener('click', function() {
//     showCartEl.classList.remove('hidden');
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
    const macIn = amount.macbook * macOneEl.textContent;
    multiplyMacEl.textContent = macIn;   
    totalAmtEl.textContent = Number(amount.macbook) + Number(totalAmtEl.textContent);
});


decreaseMacEl.addEventListener('click', function() {
    if (macOneEl.textContent <= 1) return
    decreaseMac()
    const macDec = multiplyMacEl.textContent - amount.macbook;
    multiplyMacEl.textContent = macDec
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.macbook)
    
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
    const appleIn = amount.apple * appleOneEl.textContent;
    multiplyAppleEl.textContent = appleIn;
    totalAmtEl.textContent = Number(amount.apple) + Number(totalAmtEl.textContent);
});


decreaseAppleEl.addEventListener('click', function() {
    if (appleOneEl.textContent <= 1) return
    decreaseApple();
    const appleDec = multiplyAppleEl.textContent - amount.apple
    multiplyAppleEl.textContent = appleDec;
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.apple);
   
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
    const samsungIn = amount.samsung * samsungOneEl.textContent;
    multiplySamsungEl.textContent = samsungIn;
    totalAmtEl.textContent = Number(amount.samsung) + Number(totalAmtEl.textContent);
    
});

decreaseSamsungEl.addEventListener('click', function() {
    if (samsungOneEl.textContent <= 1) return
    decreaseSamsung();
    const samsungDec = multiplySamsungEl.textContent - amount.samsung;
    multiplySamsungEl.textContent = samsungDec
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.samsung) ;
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
    const pixelIn = amount.pixel * pixelOneEl.textContent;
    multiplyPixelEl.textContent = pixelIn;
    totalAmtEl.textContent = Number(amount.pixel) + Number(totalAmtEl.textContent);
});


decreasePixelEl.addEventListener('click', function() {
    if (pixelOneEl.textContent <= 1) return
    decreasePixel();
    const pixelDec = multiplyPixelEl.textContent - amount.pixel;
    multiplyPixelEl.textContent = pixelDec ;
    totalAmtEl.textContent =  Number(totalAmtEl.textContent) - Number(amount.pixel);
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
    const airpodIn = amount.airpods * airpodsOneEl.textContent;
    multiplyAirpodsEl.textContent = airpodIn;
    totalAmtEl.textContent = Number(amount.airpods) + Number(totalAmtEl.textContent);
});

decreaseAirpodsEl.addEventListener('click', function() {
    if (airpodsOneEl.textContent <= 1) return
    decreaseAirpod();
    const airpodDec = multiplyAirpodsEl.textContent - amount.airpods;
    multiplyAirpodsEl.textContent = airpodDec;
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.airpods);
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
    const ps5In = amount.ps5 * PS5OneEl.textContent;
    multiplyPS5El.textContent = ps5In;
    totalAmtEl.textContent = Number(amount.ps5) + Number(totalAmtEl.textContent);
});


decreasePS5El.addEventListener('click', function() {
    if (PS5OneEl.textContent <= 1) return;
    decreasePS5();
    const ps5Dec = multiplyPS5El.textContent - amount.ps5
    multiplyPS5El.textContent = ps5Dec
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.ps5);
});


// Function to remove from cart

const removeMac = function() {
    decreaseNum();
    removeFromCart4.textContent = message0;
    removeFromCart4.style.backgroundColor = '#ff9a3d';
    changeColor4.style.filter = "";
    hideEl[3].classList.add('hidden');
    macEl.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.macbook)
};

const removeAppleWatch = function() {
    decreaseNum();
    removeFromCart5.textContent = message0;
    removeFromCart5.style.backgroundColor = '#ff9a3d';
    changeColor5.style.filter = "";
    hideEl[4].classList.add('hidden');
    appleEl.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.apple);
};

const removeSamsungTv = function() {
    decreaseNum();
    removeFromCart1.textContent = message0;
    removeFromCart1.style.backgroundColor = '#ff9a3d';
    changeColor1.style.filter = "";
    hideEl[0].classList.add('hidden');
    samsungEl.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.samsung) ;
};

const removePixel = function() {
    decreaseNum();
    removeFromCart2.textContent = message0;
    removeFromCart2.style.backgroundColor = '#ff9a3d';
    changeColor2.style.filter = "";
    hideEl[1].classList.add('hidden');
    pixelEl.classList.add('hidden');
    totalAmtEl.textContent =  Number(totalAmtEl.textContent) - Number(amount.pixel);
};

const removeAirpod = function() {
    decreaseNum();
    removeFromCart6.textContent = message0;
    removeFromCart6.style.backgroundColor = '#ff9a3d';
    changeColor6.style.filter = "";
    hideEl[5].classList.add('hidden');
    airPods.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.airpods);
};

const removePS5 = function() {
    decreaseNum();
    removeFromCart3.textContent = message0;
    removeFromCart3.style.backgroundColor = '#ff9a3d';
    changeColor3.style.filter = "";
    hideEl[2].classList.add('hidden');
    PS5.classList.add('hidden');
    totalAmtEl.textContent = Number(totalAmtEl.textContent) - Number(amount.ps5);
};



removeFromCart1.addEventListener("click", function() {
    if (removeFromCart1.textContent === message0) {
        countNum();
        removeFromCart1.textContent = message;
        removeFromCart1.style.backgroundColor = "#ffcd9e";
        changeColor1.style.filter = "invert(30%) grayscale(100%)";
        hideEl[0].classList.remove('hidden');
        samsungEl.classList.remove('hidden');
        totalAmtEl.textContent = Number(amount.samsung) + Number(totalAmtEl.textContent);

    }else if (removeFromCart1.textContent === message) {
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
        totalAmtEl.textContent = Number(amount.pixel) + Number(totalAmtEl.textContent);

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
        totalAmtEl.textContent = Number(amount.ps5) + Number(totalAmtEl.textContent);

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
        totalAmtEl.textContent = Number(amount.macbook) + Number(totalAmtEl.textContent);


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
        totalAmtEl.textContent = Number(amount.apple) + Number(totalAmtEl.textContent);
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
        totalAmtEl.textContent = Number(amount.airpods) + Number(totalAmtEl.textContent)
        

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
