const video = Object.create(null);

video.init = function () {
    var x = screen.width;
    var y = screen.height;
    console.log(x);
    console.log(y);
    // const height = 1vh;
    // console.log(1vh);
    const el = function (id) {
        return document.getElementById(id);
    };
    const theVid = el("theVid");
  
    function moveOne(offY) {
        // var yOffnew = window.pageYOffset;
        theVid.style.transform = "translate3d(" + offY * 0.2 + "px, " + offY + "px, 0)";
    }
    function moveTwo(offY) {
        // var yOffnew = window.pageYOffset;
        // var offset = 120;
        var theOffsetY = offY * 0.2 ;
        var run = 240 - theOffsetY;
        theVid.style.transform = "translate3d(" + run + "px, " + offY + "px, 0)";
    }
    function moveThree(offY) {
        // var yOffnew = window.pageYOffset;
        // var offset = 120;
        var theOffsetY = offY * 1.5 ;
        var run =  2255  - theOffsetY;
        theVid.style.transform = "translate3d(" + run + "px, " + offY + "px, 0)";
    }
    function moveFour(offY) {
        // var yOffnew = window.pageYOffset;
        // var offset = 120;
        var theOffsetY = offY * 1.5 ;
        var run =  -4045  + theOffsetY;
        theVid.style.transform = "translate3d(" + run + "px, " + offY + "px, 0)";
    }
    function moveFive(offY) {
        // var yOffnew = window.pageYOffset;
        // var offset = 120;
        var theOffsetY = offY * 1.5 ;
        var run =  3905  - theOffsetY;
        theVid.style.transform = "translate3d(" + run + "px, " + offY + "px, 0)";
    }
    
    function trigger() {
        var yOff = window.pageYOffset;
        // console.log(yOff);
        if (yOff < 600) {
            // window.addEventListener("scroll", moveRightOne(yOff));
            window.addEventListener("scroll", moveOne(yOff));
        }
        if (yOff > 600 && yOff < 1550) {
            // window.addEventListener("scroll", moveRightOne(yOff));
            window.addEventListener("scroll", moveTwo(yOff));
        }
        if (yOff > 1550 && yOff < 2100) {
            // window.addEventListener("scroll", moveRightOne(yOff));
            window.addEventListener("scroll", moveThree(yOff));
        }
        if (yOff > 2100 && yOff < 2650) {
            // window.addEventListener("scroll", moveRightOne(yOff));
            window.addEventListener("scroll", moveFour(yOff));
        }
        if (yOff > 2650 && yOff < 3200) {
            // window.addEventListener("scroll", moveRightOne(yOff));
            window.addEventListener("scroll", moveFive(yOff));
        }
        // if (yOff < 1200) {
        //     window.addEventListener("scroll", move(yOff));
        // }
        // if (yOff > 1200) {
        //     // theVid.style.transform = "translate3d(" + - yOff * 0.5 + "px, 0, 0)";
        //     console.log("lefttrig");
        //     window.addEventListener("scroll", moveleft(yOff));
        // }
    }
    var width = window.screen.width;
    if (width > 768) {
        window.addEventListener("scroll", trigger);
    }
};


export default Object.freeze(video);