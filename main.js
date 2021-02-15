import carousel from './carousel.js';
import nav from './nav.js';
// import video from "./videotrans.js";
import video from "./videotranslate.js";
// import video from "./dynamicvid.js";
import sticky from "./sticky.js";
import shift from "./shift.js";
import int from "./projectinteractive.js"

carousel.init();

window.addEventListener("DOMContentLoaded", function () {
    carousel.init();
    console.log("DOMloaded");
    nav.init();
    shift.init();
    video.init();
    // sticky.init();
    int.init();
});

window.addEventListener("mousemove", function () {
    // console.log("hol1");
    carousel.init();
});

window.addEventListener("resize", function () {
    // console.log("hol");
    carousel.init();
});
window.addEventListener("load", function () {
    // console.log("hol2");
    carousel.init();
});

window.addEventListener("scroll", function () {
    // console.log("hol2");
    carousel.init();
});



