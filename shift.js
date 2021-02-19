const shift = Object.create(null);

shift.init = function () {
    const el = function (id) {
        return document.getElementById(id);
    };
    const firstShift = el("firstImg");
    const thirdShift = el("thirdImg");
    const secShift = el("secImg");
    const fourthShift = el("fourthImg");
    const un1 = el("shiftone");
    const un2 = el("shifttwo");
    const un3 = el("shiftthree");
    const un4 = el("shiftfour");
    
    function shiftItRight() {
        console.log("movin");
        firstShift.style.marginLeft = "13vw";
    }
    function shiftItLeft() {
      
        firstShift.style.marginLeft = "10vw";
    }
    function shiftItRightTwo() {

        thirdShift.style.marginLeft = "13vw";
    }
    function shiftItLeftTwo() {

        thirdShift.style.marginLeft = "10vw";
    }
    function shiftItLeftThree() {
        
        secShift.style.marginRight = "13vw";
    }
    function shiftItRightThree() {
      
        secShift.style.marginRight = "10vw";
    }
    function shiftItLeftFour() {

        fourthShift.style.marginRight = "13vw";
    }
    function shiftItRightFour() {

        fourthShift.style.marginRight = "10vw";
    }
    var width = window.innerWidth;
    if (width > 768) {
        firstShift.addEventListener("mouseover", shiftItRight);
        un1.addEventListener("mouseover", shiftItRight);
        firstShift.addEventListener("mouseleave", shiftItLeft);
        un1.addEventListener("mouseleave", shiftItLeft);
        thirdShift.addEventListener("mouseover", shiftItRightTwo);
        un3.addEventListener("mouseover", shiftItRightTwo);
        thirdShift.addEventListener("mouseleave", shiftItLeftTwo);
        un3.addEventListener("mouseleave", shiftItLeftTwo);
        secShift.addEventListener("mouseover", shiftItLeftThree);
        un2.addEventListener("mouseover", shiftItLeftThree);
        secShift.addEventListener("mouseleave", shiftItRightThree);
        un2.addEventListener("mouseleave", shiftItRightThree);
        fourthShift.addEventListener("mouseover", shiftItLeftFour);
        un4.addEventListener("mouseover", shiftItLeftFour);
        fourthShift.addEventListener("mouseleave", shiftItRightFour);
        un4.addEventListener("mouseleave", shiftItRightFour);
        // firstShift.addEventListener("mouseover", test);
        // firstShift.addEventListener("mouseleave", shiftItLeft(firstShift));
    }
};

export default Object.freeze(shift);