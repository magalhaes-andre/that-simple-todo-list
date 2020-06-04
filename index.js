items = new Map()
list = document.getElementById("list")
inputButton = document.getElementById("inputTodo")
clearAllButton = document.getElementById("clearAllTodos")
clearCheckedButton = document.getElementById("clearCheckedTodos")


function addToDoToList(todoInfo) {
    this.items.set(todoInfo)
    checkItemList()
}

function checkItemList() {

}