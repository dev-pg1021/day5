function applyColor(p1){
    let ptag = document.querySelector("p");
    ptag.style.color=p1;

}

function applyfont(p1){
    let ptag=document.querySelector("p");
    ptag.style.fontSize=p1;
}

function applyAvailability(p1){
     let inputAddToCart=document.querySelector("#id1");

     if(p1){
        inputAddToCart.removeAttribute("disabled");
     }
     else{
        inputAddToCart.setAttribute("disabled", "true");

     }
     
}

function showAndHide(p1){
    let addtocart = document.querySelector("#id1");

    if(p1){
        addtocart.style.display="block";
    }
    else{
        addtocart.style.display="none";  
    }
    
}




