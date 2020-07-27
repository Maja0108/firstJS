let data = [{
        "id": 1,
        "name": "Kate Veet",
        "email": "kate@mail.hu",
        "address": "1111 Budapest"
    },
    {
        "id": 2,
        "name": "James Bloom",
        "email": "james.bloom@t.hu",
        "address": "2000 Szentendre"
    }
]

function modify(element) {
    
    console.log(element)
    let modifyButton = document.getElementById(element)
    let children = modifyButton.children
    console.log(children)
    let name = children[0].textContent
    let email = children[1].textContent
    let address = children[2].textContent
    console.log(name, email, address)
        
    
    let modifyTr = document.createElement('td')
    let nameInput = document.createElement("input")
    let modifyTr2 = document.createElement('td')
    let emailInput = document.createElement("input")
    let modifyTr3 = document.createElement('td')
    let addressInput = document.createElement("input")
    let modifyTr4 = document.createElement('td')
    let modifyBtnSave = document.createElement('button')
    let modifyBtnDelete = document.createElement('button')
    
   
    modifyButton.appendChild(modifyTr)
    modifyTr.appendChild(nameInput)
    modifyButton.appendChild(modifyTr2)
    modifyTr2.appendChild(emailInput)
    modifyButton.appendChild(modifyTr3)
    modifyTr3.appendChild(addressInput)
    modifyButton.appendChild(modifyTr4)
    modifyTr4.appendChild(modifyBtnSave)
    modifyTr4.appendChild(modifyBtnDelete)
   

    nameInput.defaultValue = name
    emailInput.defaultValue = email
    addressInput.defaultValue = address

    children[0].style.display = 'none'
    children[1].style.display = 'none'
    children[2].style.display = 'none'
    children[3].style.display = 'none'

    modifyBtnSave.className = 'btn btn-group btn-success'
    modifyBtnSave.innerHTML = 'Save'
    modifyBtnDelete.className = 'btn btn-group btn-danger'
    modifyBtnDelete.innerHTML = 'Delete'

    modifyBtnSave.id = element
    modifyBtnDelete.id = element
    modifyBtnSave.addEventListener("click", save)
    modifyBtnDelete.addEventListener("click", deleteRow2)
}

function deleteRow(element) {
    let deleteButton = document.getElementById(element)
    let parent = deleteButton.parentElement
    
    alert('Do you want do delete?')
    parent.removeChild(deleteButton)
}

function save(){
    console.log(event.target.id)
    let buttonId = event.target.id
    let saveButton = document.getElementById(buttonId)
    let children = saveButton.children
    console.log(children)
    let newName = children[4].firstChild.value
    let newEmail = children[5].firstChild.value
    let newAddress = children[6].firstChild.value
    console.log(newName, newEmail, newAddress)
}

function deleteRow2() {
    
    let buttonId = event.target.id
    let deleteButton = document.getElementById(buttonId)
    let parent = deleteButton.parentElement
    
    alert('Do you want do delete?')
    parent.removeChild(deleteButton) 
}