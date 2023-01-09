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
};

const addCard = (props) => {
    
    const item = document.createElement("div");
    item.classList.add("toDoCard")
    item.insertAdjacentHTML("afterbegin",`<h2>${props.titulo}</h2>
    <p>${props.tarea}</p>
    <div class="buttons">
        <button class="editar" buttonId="${props.id}">Editar</button> 
        <button class="eliminar" buttonId="${props.id}">Eliminar</button>
    </div>
    `)
    
    toDoCardSection.appendChild(item);
    const deleteButton = item.children[2].children[1];
    const editButton = item.children[2].children[0];

    deleteButton.addEventListener("click",(e) => {
        
        const buttonId = Number(deleteButton.getAttribute("buttonId"));
        deleteCard(buttonId)
    })
};

const deleteCard = (id) =>{
    toDoCardObjects = toDoCardObjects.filter((card) => card.id !== id);
    toDoCardSection.innerHTML = "";
    toDoCardObjects.map((element, index) => addCard(element));
    // console.log(typeof(id));
};