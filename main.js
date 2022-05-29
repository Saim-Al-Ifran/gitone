 window.addEventListener("scroll", function(){

         var x = document.getElementById("mia");
           
           if(window.pageYOffset > 20){
                  x.classList.add("sticky");
           }else{
                  x.classList.remove("sticky")
           }
 })