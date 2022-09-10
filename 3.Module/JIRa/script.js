let addTag = document.querySelector(".add");
let module= document.querySelector(".module-cont");
let textArea = document.querySelector("#Task");
let mainTag = document.querySelector(".main-cont");
let priorityTag = document.querySelectorAll(".color");
let deleteTag = document.querySelector(".delete");
let deleteFlage = false;
let flage = true;
let color = "black";
let colorArray = ["yellow","pink","green","black"];
var uid = new ShortUniqueId();
let ticketArray = [{"TicketColor":"green","TicketCont":"fvfvfvf","TicketId":123},{"TicketColor":"black","TicketCont":"dfvkfkv","TicketId":244221}];
let id;

//create ticket using array values
 for(let i=0;i<ticketArray.length;i++)
 {
    let value = ticketArray[i].TicketCont;
    let color = ticketArray[i].TicketColor;
    let tid = ticketArray[i].TicketId;
    creatTicket(value,color,tid);
 }  
 
//-----------------------toggale button
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
deleteTag.addEventListener("click",function(){
    // console.log("click fire");
    if(deleteFlage)
    {
        deleteTag.style.color = 'black';
    }
    else
    {
        deleteTag.style.color= 'red';
    }
    deleteFlage = !deleteFlage;
     
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
          id =uid();
        creatTicket(textArea.value,color);
        
        textArea.value = "";
        module.style.display = "none";

       
        console.log(ticketArray);
    }
    flage = !flage;
    
})
//----------------------------------------
function creatTicket(value,color,ticketId)
{
    let id;
     if(ticketId==undefined)
     {
      id = uid();
      
     }
     else
     {
      id = ticketId;
     }
    let divTag = document.createElement("div");
    divTag.setAttribute("class","ticket-cont");
    divTag.innerHTML = `<div class="ticket-color ${color}"></div>
    <div class="ticket-id ">#${id}</div>
    <div class="ticket-area">${value}</div>
    <div class="lock-unlock"><i class="fa fa-lock"></i></div>`;
   mainTag.appendChild(divTag);
   
   //lock-unlock 
   let ticketArea = divTag.querySelector(".ticket-area");
   let lockTag = divTag.querySelector(".lock-unlock i");
   lockTag.addEventListener('click',function(){
       if(lockTag.classList.contains("fa-lock"))
       {
         lockTag.classList.remove("fa-lock");
         lockTag.classList.add("fa-unlock");
          ticketArea.setAttribute('contenteditable',true);
       }
       else
       {
        lockTag.classList.remove("fa-unlock");
        lockTag.classList.add("fa-lock");
        ticketArea.setAttribute('contenteditable',false);
       }
   })
    
   //delete ticket
    divTag.addEventListener("click",function(){
        if(deleteFlage)
        {
            divTag.remove();
        }
    })

  //add ticket color property
  let colorTicket = divTag.querySelector(".ticket-color");
  colorTicket.addEventListener('click',function(){
    // console.log("click fire");
   let currentColor = colorTicket.classList[1];
   let index=-1;
    for(let i=0;i<colorArray.length;i++)
    {
        if(currentColor==colorArray[i])
        {
            index=(i+1)%(colorArray.length);
        }
    }
   let nextColor = colorArray[index];
   colorTicket.classList.remove(currentColor);
   colorTicket.classList.add(nextColor);


  })
   if(ticketId==undefined)
   {
    let obj={"TicketColor":color,"TicketCont":value,"TicketId":id};
      ticketArray.push(obj);
   }
}
//-------------------------------------
 