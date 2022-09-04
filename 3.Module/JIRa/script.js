let addTag = document.querySelector(".add");
let module= document.querySelector(".module-cont");
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