// const structure = Object.create(null);

// structure.init = function() {
//     const mobile = "(max-width: 768px)";
//     function setFirstChild() {
//         const matched = window.matchMedia(mobile).matches;
      
//         const topElement = matched
//           ? document.getElementById("imgonetwo")
//           : document.getElementById("extwo");
      
//         const parent = topElement.parentNode;
//         parent.insertBefore(topElement, parent.firstChild);
//       }
//       window.onload = setFirstChild;
//       window.matchMedia(mobile).addEventListener("change", setFirstChild);
// }

// export default Object.freeze(structure);