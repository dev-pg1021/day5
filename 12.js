function Like(){
   
    let h1countertag = document.querySelector("#likecount");
    let currentValue = h1countertag.innerHTML;
    let newValue= parseInt(currentValue)+1;
    h1countertag.innerHTML=newValue;
}

function disLike(){
   
    let h1countertag = document.querySelector("#dislikecount");
    let currentValue = h1countertag.innerHTML;
    let newValue= parseInt(currentValue)+1;
    h1countertag.innerHTML=newValue;
}

