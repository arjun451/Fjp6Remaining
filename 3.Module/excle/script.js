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