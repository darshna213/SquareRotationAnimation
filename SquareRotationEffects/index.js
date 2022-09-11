// Outer small box animation code start
let outerElement = document.getElementById("animate-square");
let outerElementTop = 130;
let outerElementLeft = 130;
let outerElementdeg = 0;
var leftToRight = false;
var topToBottam = false;
var rightToLeft = false;
var bottamToTop = false;
let smallBox = setInterval(animate, 10);
function animate() {
    outerElementdeg++;
    outerElement.style.transform = 'rotate(' + outerElementdeg + 'deg)';
    //left to right
    if (!leftToRight) {
        outerElementLeft++;
        outerElement.style.left = outerElementLeft + 'px';
        if (outerElementLeft == 450) {
            leftToRight = true;
        }
    }

    //top to bottam
    if (leftToRight && !topToBottam) {

        outerElementTop++;
        outerElement.style.top = outerElementTop + 'px';
        if (outerElementTop == 450) {
            topToBottam = true;
        }
    }

    //right to left
    if (topToBottam && !rightToLeft) {
        outerElementLeft--;
        outerElement.style.left = outerElementLeft + 'px';
        if (outerElementLeft == 130) {
            rightToLeft = true;
        }
    }

    //bottam to top
    if (rightToLeft && !bottamToTop) {
        outerElementTop--;
        outerElement.style.top = outerElementTop + 'px';
        if (outerElementTop == 130) {
            leftToRight = false;
            topToBottam = false;
            rightToLeft = false;
            bottamToTop = false;
        }
    }

}
// Outer small box animation code end



//Inner small box animation code start 
let innerElement = document.getElementById("animate-square-inner");
let innerElementTop = 0;
let innerElementLeft = 0;
let innerElementdeg = 0;
var topToBottam1 = false;
var leftToRight1 = false;
var bottamToTop1 = false;
var rightToLeft1 = false;


let smallBox1 = setInterval(animate1, 10);
function animate1() {
    innerElementdeg++;
    innerElement.style.transform = 'rotate(' + innerElementdeg + 'deg)';
    //top to bottom
    if (!topToBottam1) {
        innerElementTop++;
        innerElement.style.top = innerElementTop + 'px';
        if (innerElementTop == 280) {
            topToBottam1 = true;
        }
    }

    //left to right
    if (topToBottam1 && !leftToRight1) {
        innerElementLeft++;
        innerElement.style.left = innerElementLeft + 'px';
        if (innerElementLeft == 280) {
            leftToRight1 = true;
        }
    }

    //bootam to top
    if (leftToRight1 && !bottamToTop1) {
        innerElementTop--;
        innerElement.style.top = innerElementTop + 'px';
        if (innerElementTop == 0) {
            bottamToTop1 = true;
        }
    }

    //right to left
    if (bottamToTop1 && !rightToLeft1) {
        innerElementLeft--;
        innerElement.style.left = innerElementLeft + 'px';
        if (innerElementLeft == 0) {
            rightToLeft1 = false;
            topToBottam1 = false;
            leftToRight1 = false;
            bottamToTop1 = false;
        }
    }

}
//Inner small box animation code end











let outerRoundElement = document.getElementById("inner-outline-round-div");
let outerRoundDeg = 0;
var roundround = false;
let smallBox2 = setInterval(animate2, 30);
function animate2(){
    if(!roundround){
        outerRoundDeg++;
        outerRoundElement.style.transform = 'rotate(' + outerRoundDeg + 'deg)';
    }
}


let outerRoundElement1 = document.getElementById("inner-outline-round-div1");
let outerRoundDeg1 = 0;
var roundround1 = false;
let smallBox3 = setInterval(animate3, 30);
function animate3(){
    if(!roundround1){
        outerRoundDeg1--;
        outerRoundElement1.style.transform = 'rotate(' + outerRoundDeg1 + 'deg)';
    }
}



//Inner round small box animation code start 
let innerRoundElement = document.getElementById("animate-round-inner");
let innerRoundElementTop = 20;
let innerRoundElementLeft = 20;
let innerRoundElementdeg = 0;
var topToBottam2 = false;
var leftToRight2 = false;
var bottamToTop2 = false;
var rightToLeft2 = false;


let smallBox4 = setInterval(animate4, 20);
function animate4() {
    // innerRoundElementdeg++;
    // innerRoundElement.style.transform = 'rotate(' + innerRoundElementdeg + 'deg)';
    //top to bottom
    if (!topToBottam2) {
        innerRoundElementTop++;
        innerRoundElement.style.top = innerRoundElementTop + 'px';
        if (innerRoundElementTop == 100) {
            topToBottam2 = true;
        }
    }

    //left to right
    if (topToBottam2 && !leftToRight2) {
        innerRoundElementLeft++;
        innerRoundElement.style.left = innerRoundElementLeft + 'px';
        if (innerRoundElementLeft == 100) {
            leftToRight2 = true;
        }
    }

    //bootam to top
    if (leftToRight2 && !bottamToTop2) {
        innerRoundElementTop--;
        innerRoundElement.style.top = innerRoundElementTop + 'px';
        if (innerRoundElementTop == 0) {
            bottamToTop2 = true;
        }
    }

    //right to left
    if (bottamToTop2 && !rightToLeft2) {
        innerRoundElementLeft--;
        innerRoundElement.style.left = innerRoundElementLeft + 'px';
        if (innerRoundElementLeft == 0) {
            rightToLeft2 = false;
            topToBottam2 = false;
            leftToRight2 = false;
            bottamToTop2 = false;
        }
    }

}
//Inner round small box animation code end




//Inner round-1 small box animation code start 
let innerRoundElement1 = document.getElementById("animate-round-inner1");
let innerRoundElementTop1 = 20;
let innerRoundElementLeft1 = 20;
let innerRoundElementdeg1 = 0;
var topToBottam3 = false;
var leftToRight3 = false;
var bottamToTop3 = false;
var rightToLeft3 = false;


let smallBox5 = setInterval(animate5, 20);
function animate5() {
    // innerRoundElementdeg++;
    // innerRoundElement.style.transform = 'rotate(' + innerRoundElementdeg + 'deg)';
    //top to bottom
    if (!topToBottam3) {
        innerRoundElementTop1++;
        innerRoundElement1.style.top = innerRoundElementTop1 + 'px';
        if (innerRoundElementTop1 == 100) {
            topToBottam3 = true;
        }
    }

    //left to right
    if (topToBottam3 && !leftToRight3) {
        innerRoundElementLeft1++;
        innerRoundElement1.style.left = innerRoundElementLeft1 + 'px';
        if (innerRoundElementLeft1 == 100) {
            leftToRight3 = true;
        }
    }

    //bootam to top
    if (leftToRight3 && !bottamToTop3) {
        innerRoundElementTop1--;
        innerRoundElement1.style.top = innerRoundElementTop1 + 'px';
        if (innerRoundElementTop1 == 0) {
            bottamToTop3 = true;
        }
    }

    //right to left
    if (bottamToTop3 && !rightToLeft3) {
        innerRoundElementLeft1--;
        innerRoundElement1.style.left = innerRoundElementLeft1 + 'px';
        if (innerRoundElementLeft1 == 0) {
            rightToLeft3 = false;
            topToBottam3 = false;
            leftToRight3 = false;
            bottamToTop3 = false;
        }
    }

}
//Inner round-1 small box animation code end



