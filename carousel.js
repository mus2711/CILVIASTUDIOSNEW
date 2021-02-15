

const carousel = Object.create(null);

carousel.init = function () {
    var w = window.innerWidth;
    var video = document.getElementsByTagName("video")[0];
    var staticEl = document.getElementById("videodivStatic");
    var staticC = document.getElementById("staticC");

    console.log(w);
    if (w > 576) {
        video.style.display = "flex";
        video.height = 486 * (w / 1440);
        video.width = 486 * (w / 1440);
    }
    else {
        video.style.display = "none";
        staticEl.style.display = "flex";
        
        var staticWidth = 195 * (w / 576);
        staticC.style.maxWidth = `${staticWidth}px`;
    
    }
};

export default Object.freeze(carousel);