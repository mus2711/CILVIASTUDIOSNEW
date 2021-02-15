const video = Object.create(null);

video.init = function () {
    const el = function (id) {
        return document.getElementById(id);
    };
    var videodiv = el("title");
//     function yOffset() {
//         var yOff = window.pageYOffset;
//         console.log(yOff);
//         if (yOff > 30) {
//             console.log("yes");
//             el("videodiv").style.marginTop = "4ch";
//         }
//     }
//     el("main").addEventListener("click", yOffset);
// };
    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
    }

    var xScrollPosition;
    var yScrollPosition;

    function scrollLoop() {
        console.log("runnin");
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;

        setTranslate(0, yScrollPosition * 0.5, videodiv);
        // setTranslate(0, yScrollPosition * -1.5, blueSquare);
        // setTranslate(0, yScrollPosition * .5, greenPentagon);

        window.requestAnimationFrame(scrollLoop);
    }
    // window.addEventListener("DOMContentLoaded", scrollLoop, false);
    // scrollLoop();
    if (yOff > 30) {
        console.log("yes");
        //             el("videodiv").style.marginTop = "4ch";
        var yOff = window.pageYOffset;
        videodiv.style.transform = "translate3d(0, 10px, 0)";
    }
                
//     el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
};


export default Object.freeze(video);