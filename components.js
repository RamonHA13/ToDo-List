class toDoCardComponent {
    constructor(title, content, className){
        this.id = undefined;
        this.title = title;
        this.content = content;
        this.date = undefined;
        this.className = className;
        this.isDone = undefined;
    }

    render(){
        return (
            `<div class='${this.className}'> 
                <h2 '>${this.title} <span>${this.id}</span></h2> 
                <p>${this.content}</p>
            </div>`
        )
    }
}