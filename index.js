
//alert("working");




for(let i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);

function handleclick()
{
 
   //this.style.color="white";
   anime(this.innerHTML);
 switch( this.innerHTML)
 { case "w":
    let audio1=new Audio("sounds/crash.mp3"); 
     audio1.play();
     break;
     
 case "a":
    let audio2=new Audio("sounds/kick-bass.mp3"); 
     audio2.play();
     break;
  
 case "s":
    let audio3=new Audio("sounds/snare.mp3"); 
     audio3.play();
     break;
 case "d":
    let audio4=new Audio("sounds/tom-1.mp3"); 
     audio4.play();
     break;
 case "j":
    let audio5=new Audio("sounds/tom-2.mp3"); 
     audio5.play();
     break;
case "k":
    let audio6=new Audio("sounds/tom-3.mp3"); 
     audio6.play();
     break;

case "l":
    let audio7=new Audio("sounds/tom-1.mp3"); 
     audio7.play();
     break;
 }
 
}

}
document.addEventListener("keypress",f1);
function f1(event)
{

    anime(event.key);
    switch( event.key)
    { case "w":
       let audio1=new Audio("sounds/crash.mp3"); 
        audio1.play();
        break;
        
    case "a":
       let audio2=new Audio("sounds/kick-bass.mp3"); 
        audio2.play();
        break;
     
    case "s":
       let audio3=new Audio("sounds/snare.mp3"); 
        audio3.play();
        break;
    case "d":
       let audio4=new Audio("sounds/tom-1.mp3"); 
        audio4.play();
        break;
    case "j":
       let audio5=new Audio("sounds/tom-2.mp3"); 
        audio5.play();
        break;
   case "k":
       let audio6=new Audio("sounds/tom-3.mp3"); 
        audio6.play();
        break;
   
   case "l":
       let audio7=new Audio("sounds/tom-1.mp3"); 
        audio7.play();
        break;
    }
}


function anime(ckey)
{
   var active_btn=document.querySelector("."+ckey);
   active_btn.classList.add("pressed"); 


   setTimeout(function(){
     active_btn.classList.remove("pressed")
   },200);

}