function changeview(p1){
    let imgtag = document.querySelector("#id1");
    if(p1 == 1){
        imgtag.setAttribute("src","mobile1.jpeg");
    }
    else if(p1 == 2){
        imgtag.setAttribute("src","mobile3.jpeg");

    }
    else if(p1 == 3){
        imgtag.setAttribute("src","mobile2.jpeg");

    }
}