let addTag = document.querySelector(".add");
let module= document.querySelector(".module-cont");
let textArea = document.querySelector("#Task");
let mainTag = document.querySelector(".main-cont");
let flage = true;

addTag.addEventListener('click',function(){
    if(flage)
    {
     module.style.display = "flex";
    }
    else
    {
        module.style.display = "none";
    }
    flage = !flage;
})

module.addEventListener("keydown",function(e){
    let keyValue = e.key;
    if(keyValue=="Enter")
    {
        creatTicket(textArea.value);
        
        textArea.value = "";
        module.style.display = "none";

       

    }
    flage = !flage;
})

function creatTicket(value)
{
     
    let divTag = document.createElement("div");
    divTag.setAttribute("class","ticket-cont");
    divTag.innerHTML = `<div class="ticket-color "></div>
    <div class="ticket-id">#12354DF</div>
    <div class="ticket-area">${value}</div>`;
   mainTag.appendChild(divTag);
}