let items = new Map()

const list = document.getElementById("list")
const inputButton = document.getElementById("inputTodo")
const clearAllButton = document.getElementById("clearAllTodos")
const clearCheckedButton = document.getElementById("clearCheckedTodos")


function log(text) {
    return console.log('* ' + text)
}

function addToList(todoInfo) {
    items.set(items.size + 1, todoInfo.value)
    readItems()
    pushToItemList(checkItemListCount())
}

function checkItemListCount() {
    log('Items size: ' + items.size)
    return items.size
}

function readItems() {
    let itemList = new Array();

    for (counter = 1; counter <= items.size; counter++) {
        itemList.push(items.get(counter))
    }

    log('List of Items: ' + itemList)
    return itemList
}

function pushToItemList(itemPosition) {
    let item = document.createElement('li')

    item.appendChild(document.createTextNode(items.get(itemPosition)))
    this.list.appendChild(item)

    return list
}

function buildList() {
    items.Array.forEach(item => {
        pushToItemList(item)
    });
}

function clearItemList() {
    list.innerHTML = ""
}

function removeFromList(identifier) {
    items.delete(identifier)
    clearItemList()
    buildList()
}