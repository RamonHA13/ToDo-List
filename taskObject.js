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
    // console.log(toDoCardObjects)
};

const addCard = (props) => {
    
    const item = makeCardComponent(props);

    toDoCardSection.appendChild(item);

    const deleteButton = item.children[2].children[1];
    const doneButton = item.children[2].children[0];

    deleteButton.addEventListener("click",(e) => {
        
        const buttonId = Number(deleteButton.getAttribute("buttonId"));
        deleteCard(buttonId);
    })

    doneButton.addEventListener("click", (e) => {
        
        props.state = true;
        // doneAnimation();
        setTimeout(() => {
            deleteCard();
        }, 1000);
        
    })
};

const deleteCard = (id) => {
    
    toDoCardObjects = toDoCardObjects.filter((card) => card.id !== id);
    toDoCardObjects = toDoCardObjects.filter((card) => card.state !== true);
    toDoCardSection.innerHTML = "";
    toDoCardObjects.map( element => addCard(element));
    
};

const makeCardComponent = (props) => {
    const item = document.createElement("div");
    item.classList.add("toDoCard");
    item.insertAdjacentHTML("afterbegin",
    `<h2>${props.titulo}</h2>
    <p>${props.tarea}</p>
    <div class="buttons">
        <button class="doneButton" buttonId="${props.id}">Marks as done</button> 
        <button class="deleteButton" buttonId="${props.id}">Delete</button>
    </div>
    `);

    return item;
}