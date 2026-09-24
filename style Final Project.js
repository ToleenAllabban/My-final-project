let year = new Date().getFullYear();
document.getElementById("date").innerText=year;

let StartButton=document.getElementById("StartButton");
StartButton.addEventListener("click",function(){
document.getElementById("About").scrollIntoView();
});
