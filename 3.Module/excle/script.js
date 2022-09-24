const cellContaint = document.querySelector(".cell-contain");



function initCell()
{
    let cell="";
    for(let i=1;i<=100;i++)
    {
        cell+='<div class="row">';
        for(let j=1;j<=26;j++)
        {
            cell+='<div class="cell"> cell</div>';
        }
        cell+='</div>';
    }
    cellContaint.innerHTML=cell;
}
//call function
initCell();