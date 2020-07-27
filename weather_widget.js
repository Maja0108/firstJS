let temperatures = [11.2, 34, 25, -2, 0, 8, 16]

function weatherWidget() {
    let day = document.querySelector("form#widget select[name=day]")
    let tempField = document.querySelector("form#widget .temp strong")
    let day_value = day.value
    //alert("Name of the day: "+day_value)
    let day_number = parseFloat(day_value)
    temp = temperatures[day_number]
    //alert("Temperature of the day:" + temp)
    tempField.innerHTML = `${temp}`
}



function dailyProduct() {

    let day = document.querySelector("form#widget select[name=day]")
    let day_number = parseFloat(day.value)
    let text
    temp = temperatures[day_number]
    textField = document.querySelector("form#widget.widget div.day div.row.weather div.col-md-8 div.daily")
    

    if (temp < 0) {
        text = "Our daily product is Hot Chocolate"
    } else if (temp >= 0 && temp < 15) {
        text = "Our daily product is Hot Tea"
    } else if (temp >= 15 && temp < 20) {
        text = "Our daily product is Home-made Cookies"
    } else if (temp >= 20 && temp < 25) {
        text = "Our daily product is Ice Cream"
    } else {
        text = "Our daily product is Ice cold Limonade"

    }
    textField.innerHTML = `${text}`
}

function maxTemp() {
    let maxField = document.querySelector("div.col.minimum strong")
    let maxT = temperatures[0]
    for (let i = 0; i < temperatures.length; i++){
        if (maxT < temperatures[i]){
            maxT = temperatures[i]
        }
    }
    maxField.innerHTML = `${maxT}`
}

function minTemp(){
    let minField = document.querySelector("div.col.maximum strong")
    
    let minT = temperatures[0]
    for (let i = 0; i < temperatures.length; i++){
        if (minT > temperatures[i]){
            minT = temperatures[i]
        }
    }
    
    minField.innerHTML = `${minT}`
}

function averageTemp(){
    let avgField = document.querySelector(".average strong")
    let avgTemp
    let sumTemp = 0
    for (let i = 0; i < temperatures.length; i++){
        sumTemp += temperatures[i]
    }
    avgTemp = sumTemp/temperatures.length
    avgField.innerHTML = `${avgTemp.toFixed(2)}`
}