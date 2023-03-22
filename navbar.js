//generate buttons om models
for (let i in state) {
    getId.modelsList.innerHTML += `
   <a><input type="radio" class="radio" name="model" value="${state[i].id}" id="${state[i].id}" > ${state[i].id.toUpperCase()}</a>    
    `}

let btns = document.querySelectorAll('.radio')

let listsHtml = []
//listener of radioButtons
btns.forEach(btn => {
    btn.addEventListener('click', () => {

        productType = state[btn.value]
        listsHtml.push({name:productType.id})
        buttonCreate(productType)
    })
})

let selectedUser = document.querySelector('#selectUser').value
console.log(selectedUser)


let buttonCreate = (productType) => {
    let buttonsId = getEl("buttonsArray")
    let buttonsHTML = ' '
    for (let i in productType.partOfModel) {
        buttonsHTML +=`
        <input type="text" id="${productType.partOfModel[i].id}" title="set" class="input"/>
        <button class="button insert">${productType.partOfModel[i].id}</button>
        `
    }
    buttonsId.innerHTML = buttonsHTML
    buttonsId.insertAdjacentElement("beforebegin", buttonsId)
    let buttons = document.getElementsByClassName("button insert")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', onClickCountRun)
    }
}
let clickedEl









