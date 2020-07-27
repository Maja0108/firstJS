function calculatePrice(){
    alert("boci")
    let pricePerPiece = 1200
    let amountInput = document.querySelector("form#order input[name=amount]")
    let priceField = document.querySelector("form#order .message strong")
    //let saucePrice = document.querySelector("form#input fieldset[name=sauce]")
    //saucePrice = parseInt(saucePrice.value)
    let amount = parseInt(amountInput.value)
    let price = amount * pricePerPiece
    
    priceField.innerHTML = `${price}`
    
}

function calculatePrice2(){
    
    let pricePerPiece = 1200
    let amountInput = document.querySelector("form#order input[name=amount]")
    let priceField = document.querySelector("form#order .message strong")
    let saucePrice = document.querySelector("form#order select[name=sauce]")
    let extraPrice = document.querySelector('form#order input[name="extra"]:checked')

    saucePrice = parseInt(saucePrice.value)
    extraPrice = parseInt(extraPrice.value)
    alert(pricePerPiece+saucePrice+extraPrice)
    let amount = parseInt(amountInput.value)
    let price = amount * (pricePerPiece+saucePrice+extraPrice)
    
    priceField.innerHTML = `${price}`
    
}

function validate(){
    let name = document.querySelector("form#order input[name=name]")
    if (/^[a-zA-Z]+$/.test(name)){
        alert("Please, write a valid name")
    }

    let email = document.querySelector("form#order input[name=email]")
    if (/^\S+@\S+$/.test(email)){
        alert("Please, check your email address.")
    }

    
}


function calculatePrice_cond(){
    
    let pricePerPiece = 1200
    let amountInput = document.querySelector("form#order input[name=amount]")
    let priceField = document.querySelector("form#order .message strong")
    let saucePrice = document.querySelector("form#order select[name=sauce]")
    let extraPrice = document.querySelector('form#order input[name="extra"]:checked')
    let amount = parseInt(amountInput.value)

    if (amount > 10){
        alert("Maximum order number is 10")
    } else if (amount < 1){
        alert("Minimum order number is 1")
    } else {
        saucePrice = parseInt(saucePrice.value)
        extraPrice = parseInt(extraPrice.value)
    
        let price = amount * (pricePerPiece+saucePrice+extraPrice)
    
        priceField.innerHTML = `${price}` 
    }


    
    
    

}

