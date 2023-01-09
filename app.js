let toDoCardObjects = [];

bar.addEventListener("click", () => {
    wrapperAnimation(true,250);
});

closeOptions.addEventListener("click", () => {
    wrapperAnimation(false,250);
});

toDoCardForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const titleContent = e.target[0].value;
    const textAreaContent = e.target[1].value;
    const date = Date.now();
    
    makeObject(date, titleContent, textAreaContent);
    toDoCardSection.innerHTML = ""
    toDoCardObjects.map((element, index) => addCard(element));
    
});




