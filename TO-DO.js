let task =document.getElementById("task1");
let new1 = document.getElementById("new");
let listc = document.getElementById("list-con")
let newtask = document.getElementById("newtask")
task.addEventListener('change', ()=>{
  let b=task.value;
  let btn2=document.getElementById("btn2");
  btn2.onclick=()=>{
  let li = document.createElement("li");
  
  li.innerHTML=b;
  listc.appendChild(li);
 
  alert("New Task added");
  li.addEventListener("click",()=>{
     li.style.textDecoration="line-through";
      newtask.innerText=li.innerText;
      newtask.style.listStyle="disc";
  })
  }

})
let show =document.getElementsByClassName("show");
 let Emails=document.getElementById("Emails");
 let lunch=document.getElementById("lunch");
 let walking=document.getElementById("walking");
 let lun=document.getElementById("lun");
 let Email=document.getElementById("Email");
 let walk=document.getElementById("walk");
 let btn = document.getElementById("btn");
 let complete=document.getElementById("Completed")
 let pendno= document.getElementById("pend");
 let task1=()=>{
    Emails.style.textDecoration="line-through";
     setTimeout(()=>{
         Email.style.listStyle="disc";
         Email.innerText=Emails.innerText;
     alert("Task-1 Completed..!!");
     },1000);
   
 }
 let task2=()=>{
     lunch.style.textDecoration="line-through";
     setTimeout(()=>{
       lun.innerText= lunch.innerText;
     lun.style.listStyle="disc";
     alert("Task-2 Completed..!!");
     },1000);
   
 }
 let task3=()=>{
     walking.style.textDecoration="line-through";
     setTimeout(()=>{
      walk.style.listStyle="disc";
      walk.innerText= walking.innerText;
    
      alert("Task-3 Completed..!!");
     },1000);
   
 }