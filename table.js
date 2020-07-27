let users = [{
        surname: "Berger",
        firstname: "Whitney",
        age: 22
    },
    {
        surname: "Nagy",
        firstname: "Arpad",
        age: 33
    },
    {
        surname: "Kiss",
        firstname: "Bence",
        age: 44
    },
    {
        surname: "Doe",
        firstname: "John",
        age: 55
    },
    {
        surname: "Jack",
        firstname: "Vadolo",
        age: 32
    },
    {
        surname: "Rostas",
        firstname: "Mario",
        age: 45
    },
    {
        surname: "Feher",
        firstname: "Peter",
        age: 54
    },
    {
        surname: "Piros",
        firstname: "Gizella",
        age: 12
    }
]

let tableBody = document.querySelector("#userTable tbody")
let createTD = (html, parent) => {

    let td = document.createElement("td")
    td.innerHTML = html
    parent.appendChild(td)
}

let createButtonGroup = parent => {
    let group = document.createElement("div")
    group.className = "btn-group"

    let btnInfo = document.createElement("button")
    btnInfo.className = "btn-info btn"
    btnInfo.innerHTML = "save"

    let btnDanger = document.createElement("button")
    btnDanger.className = "btn-danger btn"
    btnDanger.innerHTML = "delete"

    group.appendChild(btnInfo)
    group.appendChild(btnDanger)

    let td = document.createElement("td")
    td.appendChild(group)
    parent.appendChild(td)
}

for (let k in users) {
    let tr = document.createElement("tr")
    createTD(parseInt(k) + 1, tr)
    for (let value of Object.values(users[k])) {
        createTD(value, tr)
    }
    createButtonGroup(tr)
    tableBody.appendChild(tr)
}

//let newUserTable = []

function saveNew() {
    let newName = document.querySelector("input#surname").value
    let newFirstName = document.querySelector("input#firstname").value
    let newAge = document.querySelector("input#age").value
    console.log(newName, newFirstName, newAge)
    person = {}
    person.surname = newName
    person.firstname = newFirstName
    person.age = parseInt(newAge)
    users.push(person)
    console.log(users)
    let m = users.length

    let tr = document.createElement("tr")
    createTD(parseInt(m), tr)
    for (let value of Object.values(users[m-1])) {
        createTD(value, tr)
    }
    createButtonGroup(tr)
    tableBody.appendChild(tr)
}


