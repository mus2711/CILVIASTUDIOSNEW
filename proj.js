import nav from './nav.js';
// import video from "./videotrans.js";
import video from "./videotranslate.js";
// import video from "./dynamicvid.js";
import sticky from "./sticky.js";
import shift from "./shift.js";
import videoResize from "./vidResize.js"

window.addEventListener("DOMContentLoaded", function () {
    console.log("DOMloaded");
    nav.init();
    videoResize.init();

    // shift.init();
    // video.init();
    // sticky.init();
});
