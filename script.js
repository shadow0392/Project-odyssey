// PROJECT ODYSSEY
// v0.2.0 - Engineering Refit


let energy = 0;
let timeline = 0;
let knowledge = 0;


let batteryLevel = 0;
let generatorLevel = 0;


let energyPerSecond = 1;



// GAME LOOP

setInterval(() => {

    energy += energyPerSecond;

    updateDisplay();

}, 1000);





// UPGRADES


function buyBattery(){

    let cost = (batteryLevel + 1) * 50;


    if(energy >= cost){

        energy -= cost;

        batteryLevel++;

        energyPerSecond += 1;

        updateDisplay();

    }

}



function buyGenerator(){

    let cost = (generatorLevel + 1) * 250;


    if(energy >= cost){

        energy -= cost;

        generatorLevel++;

        energyPerSecond += 5;

        updateDisplay();

    }

}





// TIMELINE RESTORATION


function prestige(){

    let cost = 5000 + (timeline * 2500);


    if(energy >= cost){


        timeline++;

        knowledge += 1;


        energy = 0;


        batteryLevel = 0;

        generatorLevel = 0;


        energyPerSecond = 1 + knowledge;


        updateDisplay();

    }

}





// ROOM SWITCHING


function openRoom(roomID){


    let rooms = document.querySelectorAll(".room");


    rooms.forEach(room => {

        room.classList.add("hidden");

    });


    document.getElementById(roomID)
    .classList.remove("hidden");


}





// DISPLAY UPDATE


function updateDisplay(){


    document.getElementById(
        "energy-display"
    ).innerText = formatNumber(energy);


    document.getElementById(
        "timeline-energy"
    ).innerText = formatNumber(energy);


    document.getElementById(
        "timeline-display"
    ).innerText = timeline;


    document.getElementById(
        "timeline-display-2"
    ).innerText = timeline;


    document.getElementById(
        "knowledge-display"
    ).innerText = knowledge;


    document.getElementById(
        "production-display"
    ).innerText = energyPerSecond;


    document.getElementById(
        "battery-level"
    ).innerText = batteryLevel;


    document.getElementById(
        "generator-level"
    ).innerText = generatorLevel;



    document.getElementById(
    "prestige-cost"
).innerText = formatNumber(
    5000 + (timeline * 2500)
);



document.getElementById(
    "battery-cost"
).innerText = formatNumber(
    (batteryLevel + 1) * 50
);

document.getElementById(
    "generator-cost"
).innerText = formatNumber(
    (generatorLevel + 1) * 250
);    

}


// INITIAL DISPLAY
function formatNumber(value){

    if(value < 1000){
        return Math.floor(value);
    }

    return value.toExponential(2).replace("+", "");

}

let buyAmount = 1;

function setBuyAmount(amount){

    buyAmount = amount;

}

updateDisplay();
