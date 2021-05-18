const int = Object.create(null);

int.init = function () {

        // Opera 8.0+
    var isOpera =
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
    return p.toString() === '[object SafariRemoteNotification]';
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 79
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && navigator.userAgent.indexOf('Edg') != -1;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    console.log(isFirefox);



    const el = function (id) {
        return document.getElementById(id);
    };

    function opacity(element) {
        console.log("trig");
        el(element).style.marginLeft = "3vw";
    }
    function kopacity(element) {
        console.log("kopacity");
        el(element).style.marginLeft = "0vw";
    }
    function move(element) {
        console.log("trig");
        // el(element).style.marginRight = "6vw";
        el(element).style.marginLeft = "-3vw";
    }
    function kmove(element) {
        el(element).style.marginLeft = "0";
    }



    function opacity2(element) {
        console.log("trig");
        el(element).style.marginLeft = "6vw";
    }
    function kopacity2(element) {
        console.log("kopacity");
        el(element).style.marginLeft = "0vw";
    }
    function move2(element) {
        console.log("trig");
        // el(element).style.marginRight = "6vw";
        el(element).style.marginLeft = "-6vw";
    }
    function kmove2(element) {
        el(element).style.marginLeft = "0";
    }

    function test() {
        console.log("yea");
    }

    var width = window.innerWidth;
    console.log(width);
    if (width > 768) {

        
        el("fc").addEventListener("mouseover", function () { opacity("fc");});
        el("fc1").addEventListener("mouseover", function () { opacity("fc");});


        el("ag").addEventListener("mouseenter", function () { move("ag");});
        el("ag1").addEventListener("mouseenter", function () { move("ag");});
        
        el("cs").addEventListener("mouseenter", function () { move("cs");});
        el("cs1").addEventListener("mouseenter", function () { move("cs");});

        el("tg").addEventListener("mouseenter", function () { opacity("tg");});
        el("tg1").addEventListener("mouseenter", function () { opacity("tg");});

        el("webOne").addEventListener("mouseenter", function () { move("webOne");});
        el("webOne1").addEventListener("mouseenter", function () { move("webOne");});

        el("sb").addEventListener("mouseenter", function () { opacity("sb");});
        el("sb1").addEventListener("mouseenter", function () { opacity("sb");});

        el("webTwo").addEventListener("mouseenter", function () { opacity("webTwo");});
        el("webTwo1").addEventListener("mouseenter", function () { opacity("webTwo");});

        // el("cr").addEventListener("mouseenter", function () { opacity("cr");});
        // el("cr1").addEventListener("mouseenter", function () { opacity("cr");});

        el("ab").addEventListener("mouseenter", function () { opacity("ab");});
        el("ab1").addEventListener("mouseenter", function () { opacity("ab");});

        el("cp").addEventListener("mouseenter", function () { opacity("cp");});
        el("cp1").addEventListener("mouseenter", function () { opacity("cp");});

        // el("rh").addEventListener("mouseenter", function () { move("rh");});
        // el("rh1").addEventListener("mouseenter", function () { move("rh");});




        el("fc").addEventListener("mouseleave", function () { kopacity("fc");});
        el("fc1").addEventListener("mouseleave", function () { kopacity("fc");});

        el("ag").addEventListener("mouseleave", function () { kmove("ag");});
        el("ag1").addEventListener("mouseleave", function () { kmove("ag");});

        el("cs").addEventListener("mouseleave", function () { kmove("cs");});
        el("cs1").addEventListener("mouseleave", function () { kmove("cs");});


        el("tg").addEventListener("mouseleave", function () { kopacity("tg");});
        el("tg1").addEventListener("mouseleave", function () { kopacity("tg");});

        el("webOne").addEventListener("mouseleave", function () { kmove("webOne");});
        el("webOne1").addEventListener("mouseleave", function () { kmove("webOne");});

        el("sb").addEventListener("mouseleave", function () { kopacity("sb");});
        el("sb1").addEventListener("mouseleave", function () { kopacity("sb");});

        el("cr").addEventListener("mouseleave", function () { kopacity("cr");});
        el("cr1").addEventListener("mouseleave", function () { kopacity("cr");});

        el("webTwo").addEventListener("mouseleave", function () { kopacity("webTwo");});
        el("webTwo1").addEventListener("mouseleave", function () { kopacity("webTwo");});

        el("ab").addEventListener("mouseleave", function () { kopacity("ab");});
        el("ab1").addEventListener("mouseleave", function () { kopacity("ab");});

        el("cp").addEventListener("mouseleave", function () { kopacity("cp");});
        el("cp1").addEventListener("mouseleave", function () { kopacity("cp");});

        // el("rh").addEventListener("mouseleave", function () { kmove("rh");});
        // el("rh1").addEventListener("mouseleave", function () { kmove("rh");});

        if (isFirefox || isChrome) {
           

            el("fc").addEventListener("mouseover", function () { opacity2("fc");});
            el("fc1").addEventListener("mouseover", function () { opacity2("fc");});
    
    
            el("ag").addEventListener("mouseenter", function () { move2("ag");});
            el("ag1").addEventListener("mouseenter", function () { move2("ag");});
            
            el("cs").addEventListener("mouseenter", function () { move2("cs");});
            el("cs1").addEventListener("mouseenter", function () { move2("cs");});
    
            el("tg").addEventListener("mouseenter", function () { opacity2("tg");});
            el("tg1").addEventListener("mouseenter", function () { opacity2("tg");});
    
            el("webOne").addEventListener("mouseenter", function () { move2("webOne");});
            el("webOne1").addEventListener("mouseenter", function () { move2("webOne");});
    
            el("sb").addEventListener("mouseenter", function () { opacity2("sb");});
            el("sb1").addEventListener("mouseenter", function () { opacity2("sb");});
    
            el("webTwo").addEventListener("mouseenter", function () { opacity2("webTwo");});
            el("webTwo1").addEventListener("mouseenter", function () { opacity2("webTwo");});
    
            el("cr").addEventListener("mouseenter", function () { opacity2("cr");});
            el("cr1").addEventListener("mouseenter", function () { opacity2("cr");});
    

            el("ab").addEventListener("mouseenter", function () { opacity2("ab");});
            el("ab1").addEventListener("mouseenter", function () { opacity2("ab");});
    
            el("cp").addEventListener("mouseenter", function () { opacity2("cp");});
            el("cp1").addEventListener("mouseenter", function () { opacity2("cp");});
    
            // el("rh").addEventListener("mouseenter", function () { move("rh");});
            // el("rh1").addEventListener("mouseenter", function () { move("rh");});
    
    
    
           

            el("fc").addEventListener("mouseleave", function () { kopacity2("fc");});
            el("fc1").addEventListener("mouseleave", function () { kopacity2("fc");});
    
            el("ag").addEventListener("mouseleave", function () { kmove2("ag");});
            el("ag1").addEventListener("mouseleave", function () { kmove2("ag");});
    
            el("cs").addEventListener("mouseleave", function () { kmove2("cs");});
            el("cs1").addEventListener("mouseleave", function () { kmove2("cs");});
    
    
            el("tg").addEventListener("mouseleave", function () { kopacity2("tg");});
            el("tg1").addEventListener("mouseleave", function () { kopacity2("tg");});
    
            el("webOne").addEventListener("mouseleave", function () { kmove2("webOne");});
            el("webOne1").addEventListener("mouseleave", function () { kmove2("webOne");});
    
            el("sb").addEventListener("mouseleave", function () { kopacity2("sb");});
            el("sb1").addEventListener("mouseleave", function () { kopacity2("sb");});
    
            el("webTwo").addEventListener("mouseleave", function () { kopacity2("webTwo");});
            el("webTwo1").addEventListener("mouseleave", function () { kopacity2("webTwo");});

            el("cr").addEventListener("mouseleave", function () { kopacity2("cr");});
            el("cr1").addEventListener("mouseleave", function () { kopacity2("cr");});
    
            el("ab").addEventListener("mouseleave", function () { kopacity2("ab");});
            el("ab1").addEventListener("mouseleave", function () { kopacity2("ab");});
    
            el("cp").addEventListener("mouseleave", function () { kopacity2("cp");});
            el("cp1").addEventListener("mouseleave", function () { kopacity2("cp");});
    
            // el("rh").addEventListener("mouseleave", function () { kmove("rh");});
            // el("rh1").addEventListener("mouseleave", function () { kmove("rh");});
        }
       

    }

    
};

export default Object.freeze(int);