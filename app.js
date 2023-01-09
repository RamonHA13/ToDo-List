let toDoCardObjects = [];


bar.addEventListener("click", () => {
    wrapperAnimation(true,250);
})

closeOptions.addEventListener("click", () => {
    wrapperAnimation(false,250);
})

toDoCardForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const titleContent = e.target[0].value;
    const textAreaContent = e.target[1].value;
    const date = Date.now();
    
    makeObject(date, titleContent, textAreaContent);
    toDoCardSection.innerHTML = ""
    toDoCardObjects.map((element, index) => addCard(element));
    
})

const makeObject = (date, title, text) => {

    const tarea = {
        id: date,
        titulo: title,
        tarea: text,
        state: false,
        
        get Id(){
            return this.id;
        }
    }

    toDoCardObjects = [...toDoCardObjects,tarea]
    console.log(toDoCardObjects)
}
const addCard = (props) => {
    
    const item = document.createElement("div");
    item.classList.add("toDoCard")
    item.innerHTML = `
    <h2>${props.titulo}</h2>
    <p>${props.tarea}</p>
    <div class="buttons">
        <button class="editar">Editar</button> 
        <button class="eliminar">Eliminar</button>
    </div>
    `
    console.log(item)
    toDoCardSection.appendChild(item)
    
    console.log(toDoCardObjects[0].id)
}

