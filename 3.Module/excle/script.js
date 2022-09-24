const cellDiv = document.querySelector(".cell-contain");



function initCell()
{
    let cellContain="";
    cellContain+=`<div class="top-left-cell"></div>`;
     cellContain+=`<div class="top-row">`;
     for(let i=0;i<26;i++)
     {
        cellContain+=`<div class="top-row-cell">${String.fromCharCode(i+65)} </div>`
     }
     cellContain+=`</div>`;
     cellContain+=`<div class="left-column">`
     for(let i=1;i<=100;i++)
     {
        cellContain+=`<div class="left-column-cell">${i}</div>`;
     }
     cellContain+=`</div>`
     cellContain+=`<div class="cells">`;
    for(let i=1;i<=100;i++)
    {
        cellContain+='<div class="row">';
        for(let j=1;j<=26;j++)
        {
            cellContain+='<div class="cell" contentEditable="True">cell </div>';
        }
        cellContain+='</div>';
    }
    cellContain+=`</div>`
    cellDiv.innerHTML=cellContain;
}
//call function
initCell();

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