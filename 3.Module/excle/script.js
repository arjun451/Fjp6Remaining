

let topRow = document.querySelector(".top-row");
let LC = document.querySelector(".left-column");
let TLC = document.querySelector(".top-left-cell");

cellDiv.addEventListener("scroll",function(e){
    
  let scrollTop = e.target.scrollTop;
  let scrollLet = e.target.scrollLeft;
   topRow.style.top = scrollTop+"px";
  LC.style.left = scrollLet+"px";
  TLC.style.top = scrollTop+"px";
  TLC.style.left = scrollLet+"px";
});