"use strict"

let valasztottHonap = ""
let honapHossza = 0

function getHonap(){
    let honapok = document.querySelector('#cbHonapok');
    let kiirat = honapok.value;
    valasztottHonap = kiirat
    if (kiirat == "Február") {
        honapHossza = 28
    }
    else if (kiirat == "Április" || kiirat == "Június" || kiirat == "Szeptember" || kiirat == "November") {
        honapHossza = 30
    }
    else{
        honapHossza = 31
    }
    document.getElementById('tabla').innerHTML = ""
    for (let index = 0; index < honapHossza; index++) {
        let ujDiv = document.createElement("div");
        let ujLabel = document.createElement("label");
        let ujInput = document.createElement("input")
        ujInput.type = "text"
        ujLabel.innerHTML = index+1
        ujDiv.appendChild(ujLabel);
        ujDiv.appendChild(ujInput);
        document.getElementById('tabla').appendChild(ujDiv)
    }
    
    console.log(valasztottHonap);
    console.log(honapHossza)
}

