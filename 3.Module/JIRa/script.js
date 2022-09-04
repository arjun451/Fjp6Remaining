let addTag = document.querySelector(".add");
let module= document.querySelector(".module-cont");
let textArea = document.querySelector("#Task");
let mainTag = document.querySelector(".main-cont");
let priorityTag = document.querySelectorAll(".color");
let flage = true;
let color = "orange";

//-----------------------
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
//------------------------------------
for(let i=0;i<priorityTag.length;i++)
{
    priorityTag[i].addEventListener('click',function(){
        for(let j=0;j<priorityTag.length;j++)
        {
            priorityTag[j].classList.remove("active");
        }
        priorityTag[i].classList.add("active");
        color = priorityTag[i].classList[0];
    })
}

//----------------------
module.addEventListener("keydown",function(e){
    let keyValue = e.key;
    if(keyValue=="Enter")
    {
        creatTicket(textArea.value,color);
        
        textArea.value = "";
        module.style.display = "none";

       

    }
    flage = !flage;
})
//----------------------------------------
function creatTicket(value,color)
{
     
    let divTag = document.createElement("div");
    divTag.setAttribute("class","ticket-cont");
    divTag.innerHTML = `<div class="ticket-color ${color}"></div>
    <div class="ticket-id ">#12354DF</div>
    <div class="ticket-area">${value}</div>`;
   mainTag.appendChild(divTag);
}