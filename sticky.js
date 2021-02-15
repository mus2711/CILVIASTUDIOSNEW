// When the user scrolls the page, execute myFunction




// // Get the offset position of the navbar
// var sticky = header.offsetTop;



const sticky = Object.create(null);

sticky.init = function () {
    function myFunction() {
        if (window.pageYOffset > 0) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }

    var header = document.getElementById("myHeader");
    window.onscroll = function() {myFunction()};
};


export default Object.freeze(sticky);