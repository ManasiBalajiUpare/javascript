let btn=document.getElementById("colorBtn");
let box=document.getElementById("hoverBox");
let input=document.getElementById("nameinput");
let select=document.getElementById("colorSelect");
let msg=document.getElementById("message");






btn.addEventListener("click",function(){
    msg.innerHTML="you clicked the button";
    document.body.style.backgroundColor="gray";
});
box.addEventListener("mouseover",function(){
    box.style.backgroundColor="gold";
    box.innerHTML="mouse is here!!!!"
});
box.addEventListener("mouseout",function(){
    box.style.backgroundColor="Pink";
    box.innerHTML="Hover over me!!"
});
input.addEventListener("keyup",function(){
    msg.innerHTML="hello"+input.value;
});
select.addEventListener("change",function()
{
    let color=select.value;
    if(color)
    {
        document.body.style.backgroundColor=color;
        msg.innerHTML="background  changed t0"+color;

    }
    else{
        msg.innerHTML=" ";
    }

})
