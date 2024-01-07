let hari=document.getElementById("hari");
let darkmode=document.getElementById("darkmode");
hari.addEventListener('click', function(){
    if(darkmode.checked){
        document.body.style.background="";
        document.body.style.color="";
    }
    else {
        document.body.style.background="black";
        document.body.style.color="white";
    }
   
})