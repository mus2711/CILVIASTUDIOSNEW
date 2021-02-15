const nav = Object.create(null);

nav.init = function () {
    var width = window.screen.width;
    // console.log(width);
    const el = function (id) {
        return document.getElementById(id);
    };
    el("content").style.display="none";
    // el("overlay").style.display="none";
    el("phonecontent").style.display="none";
    el("thephonenav").style.display="none";
    // el("circle").style.display = "none";

    function opennav() {
        el("thenav").style.width = "22vw";
        // el("main").style.marginRight="22vw";
        // el("overlay").style.width="85vw";
        el("overlay").style.width="100vw";
        // el("overlay").style.right="22vw";
        function show() {
            el("content").style.display="initial";
        }
        setTimeout(show, 500)
        // el("overlay").style.display="initial";
        // document.addEventListener('mousemove', function(e) {
        //     let body = document.querySelector('body');
        //     let circle = document.getElementById('circle');
        //     let left = e.offsetX;
        //     let top = e.offsetY;
        //     circle.style.display = "initial";
        //     circle.style.left = left + 'px';
        //     circle.style.top = top + 'px';
        // });
    }

    function closenav() {
        el("thenav").style.width = "0vw";
        el("overlay").style.width = "0vw";
        // el("overlay").style.display="none";
        el("content").style.display="none";
        // el("circle").style.display = "none";
    }
    function openphonenav() {
        // console.log("open");
        el("thephonenav").style.height = "auto";
        el("thephonenav").style.width = "100vw";
        el("phonecontent").style.display = "initial";
        el("thephonenav").style.display="initial";

    }
    function closephonenav() {
        // console.log("open");
        el("thephonenav").style.height = "0";
        el("thephonenav").style.width = "0";
        el("phonecontent").style.display = "none";
        el("thephonenav").style.display="none";

    }
    if (width > 576) {
        // console.log("yes");
        // console.log(width);
        el("nav").addEventListener("click", opennav);
        el("main").addEventListener("click", closenav);
    }
    if (width < 576) {
        // console.log("no");
        el("nav").addEventListener("click", openphonenav);
        el("main").addEventListener("click", closephonenav);
        // el("main").addEventListener("click", closenav);
    }
};

export default Object.freeze(nav);