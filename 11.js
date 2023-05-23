function Like(){
    /*
    COUNTER STEPS
    SELECT THE ELEMENT 
    GET THE EXISTING VALUE : innerHTML (returns string)
    SET THE NEW VALUE
    */
    let h1countertag = document.querySelector("#counter");
    let currentValue = h1countertag.innerHTML;
    let newValue= parseInt(currentValue)+1;
    h1countertag.innerHTML=newValue;
}