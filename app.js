bar.addEventListener("click", () => {
    wrapperAnimation(true,250);
})

closeOptions.addEventListener("click", () => {
    wrapperAnimation(false,250);
})


// const todo1 = new toDoCardComponent(1,"comer","ir a comer", "toDoCard");
const toDoCards = []
for(i=0; i < 6; i++){
    
    toDoCards.push(new toDoCardComponent(i, `Comer`, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "toDoCard"));
}
toDoCards.forEach((element, index) => {
    toDoCardSection.innerHTML += element.render();
})
// console.log(todo1)
console.log(toDoCards)
console.log(toDoCardForm)