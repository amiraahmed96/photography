/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
    x.className += " responsive";
    } else {
                x.className = "topnav";
            }
        }

window.onscroll = function()
{
    if(window.pageYOffset > 100)
        {
            document.getElementById("myTopnav").style.backgroundColor = "gray";
        }
    else
        {
           document.getElementById("myTopnav").style.backgroundColor = "transparent"; 
        }
}

/* ********************* create gallary ****************** */
/*var images = document.getElementsByTagName("img");
var imgsrc=[];

for(var i = 1 ; i < 11 ; i++)
    {
        imgsrc.push(images[i].src);
    }
for(var i = 1 ; i < 11 ; i++)
    {
        images[i].onclick = function()
        {
            var div = document.createElement("div");
            div.style.position = "fixed";
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.left = "0px";
            div.style.top =  "0px";
            div.style.backgroundColor = "rgba(0,0,0,0.6)";
            div.style.zIndex = "20";
            document.body.appendChild(div);
            
            var img = document.createElement("img");
            img.src = this.src;
            img.style.marginLeft = "40%";
            img.style.marginTop = "10%";
            div.appendChild(img);
            
            
            var close = document.createElement("span");
            close.innerHTML = "&times";
            close.style.color = "white";
            close.style.fontSize = "60px";
            close.style.position = "absolute";
            close.style.right = "500px";
            close.style.top = "9%";
            div.appendChild(close);
        }
    }*/







$(window).ready(function(){
$(".header #goto").click(function(){
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});
    
    $(".about #goto2").click(function(){
    $('html, body').animate({
        scrollTop: $(".portpholio").offset().top
    }, 1000);
});
    
    $(".portpholio #goto3").click(function(){
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});
    
    
    
      $("#home").click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
    
      $("#about").click(function(){
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 1000);
});
    
    
    
     $("#portpholio").click(function(){
    $('html, body').animate({
        scrollTop: $(".portpholio").offset().top
    }, 1000);
});
    
    
    
     $("#contact").click(function(){
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
});
    
    
    
    
})