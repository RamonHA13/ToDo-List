const slideAnimation = (element, time, coords) => { 
    const [x1,x2] = coords
    element.animate([
        { transform: `translateX(${x1})`},
        { transform: `translateX(${x2})`},
    ],time);
}

const wrapperAnimation = (status, time) => {
    if (status === true){
        wrapper.style.display = "flex";
        slideAnimation(wrapper,time,["-200px", "0px"]);

    }else if(status === false){
        slideAnimation(wrapper,time,["0px","-200px"]);
        setTimeout(()=>{
            wrapper.style.display = "none"
        }, time)
    }
}

const doneAnimation = (element) =>{
    element.animate([
        {
            scale: "100%",
        },
        {
            scale: "500%",
        },
        {
            scale: "0",
        }
    ],1000);
}