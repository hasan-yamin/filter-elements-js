let btns = document.querySelectorAll("#myBtnContainer button");
// console.log(btns.length);

for(let i=0 ; i<btns.length ; i++){
    btns[i].addEventListener("click",function(){

        // remove class active fromm last active
        var current = document.getElementsByClassName("active");
        current[0].classList.remove("active");

        // get all elements will be filtered
        let allElm = document.querySelectorAll(".container .filterDiv");
        // console.log(allElm.length);

        // check type of sellected btn
        if(btns[i].classList.contains("all")){
            // add show class to all elements
            for(let j=0 ; j<allElm.length ; j++){
                allElm[j].classList.add("show");
            }
        }else{
            // show class will be added to current type of filter
            for(let j=0 ; j<allElm.length ; j++){
                if(allElm[j].classList.contains("f-"+btns[i].className)){
                    allElm[j].classList.add("show");
                }else{
                    allElm[j].classList.remove("show");
                }
            }
        }
        // add class active to current btn
        btns[i].classList.add("active");
    });
}

