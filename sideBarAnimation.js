const slideAnimation = (element, time, [x1,x2]) => { 
    
    element.animate([
        { transform: `translateX(${x1})`},
        { transform: `translateX(${x2})`},
    ],time);

    
}
const wrapperAnimation = (status, time) =>{
    
    if (status === true){
        wrapper.style.display = "inline-block";
        slideAnimation(wrapper,time,["-200px", "0px"]);

    }else if(status === false){
        slideAnimation(wrapper,time,["0px","-200px"]);
        setTimeout(()=>{
            wrapper.style.display = "none"
        }, time)
    }
    
}