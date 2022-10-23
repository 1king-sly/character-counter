const text = document.getElementById("text");
const current = document.getElementById("current");
const remain = document.getElementById("remain");

current.innerText = 0;
remain.innerText = 50;

text.addEventListener("keyup",function(){
    current.innerText = text.value.length;
    remain.innerText = text.getAttribute("maxlength") - text.value.length;
})
    

    

   




