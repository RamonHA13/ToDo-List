const toDoCardObjects = [];
let iterator = 0

bar.addEventListener("click", () => {
    wrapperAnimation(true,250);
})

closeOptions.addEventListener("click", () => {
    wrapperAnimation(false,250);
})

toDoCardForm.addEventListener("submit", (e) =>{

    const titleContent = e.target[0].value;
    const textAreaContent = e.target[1].value;
    
    e.preventDefault();
    addCard(titleContent,textAreaContent, iterator);
    iterator++;
})

const addCard = (title, text, i) =>{

    toDoCardObjects.push(new toDoCardComponent(title, text, "toDoCard"))
    const arrayToDos = toDoCardObjects.map((card, index) =>{
        card.id = index + 1;
        return card.render()
    })

    toDoCardSection.innerHTML += arrayToDos[i]
    console.log()
}

