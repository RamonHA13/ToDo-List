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
    const id = Date.now();
    
    makeObject(id, titleContent, textAreaContent);
    toDoCardSection.innerHTML = ""
    toDoCardObjects.map((element) => addCard(element));
    
});




