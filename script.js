// PROJECT ODYSSEY
// v0.2.0 - Engineering Refit


let energy = 0;
let timeline = 0;
let knowledge = 0;
let buyAmount = 1;

let batteryLevel = 0;
let generatorLevel = 0;
let plasmaLevel = 0;
let epsLevel = 0;
let injectorLevel = 0;
let calibrationLevel = 0;

let energyPerSecond = 100;



// GAME LOOP

setInterval(() => {

    let multiplier = 1 + (calibrationLevel * 0.01);

    energy += energyPerSecond * multiplier;

    updateDisplay();

}, 1000);





// UPGRADES


function buyBattery() {

    for (let i = 0; i < buyAmount; i++) {

        let cost = (batteryLevel + 1) * 50;

        if (energy >= cost) {

            energy -= cost;
            batteryLevel++;
            calculateProduction();

        } else {

            break;

        }

    }

    updateDisplay();

}


function buyGenerator() {

    for (let i = 0; i < buyAmount; i++) {

        let cost = (generatorLevel + 1) * 250;

        if (energy >= cost) {

            energy -= cost;
            generatorLevel++;
            calculateProduction();

        } else {

            break;

        }

    }

    updateDisplay();

}


function buyPlasma() {

    for (let i = 0; i < buyAmount; i++) {

        let cost = (plasmaLevel + 1) * 1000;

        if (energy >= cost) {

            energy -= cost;
            plasmaLevel++;
            calculateProduction();

        } else {

            break;

        }

    }

    updateDisplay();

}

function buyEPS() {

    for (let i = 0; i < buyAmount; i++) {

        let cost = (epsLevel + 1) * 5000;

        if (energy >= cost) {

            energy -= cost;
            epsLevel++;
            calculateProduction();

        } else {

            break;

        }

    }

    updateDisplay();

}

function buyInjectors() {

    for (let i = 0; i < buyAmount; i++) {

        let cost = (injectorLevel + 1) * 25000;

        if (energy >= cost) {

            energy -= cost;

            injectorLevel++;

            calculateProduction();

        } else {

            break;

        }

    }

    updateDisplay();

}

function buyCalibration() {

    for (let i = 0; i < buyAmount; i++) {

        let cost = (calibrationLevel + 1) * 100000;

        if (energy >= cost) {

            energy -= cost;
            calibrationLevel++;

        } else {

            break;

        }

    }

    updateDisplay();

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


        calculateProduction();


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
    "plasma-level"
).innerText = plasmaLevel;

    document.getElementById(
    "eps-level"
    ).innerText = epsLevel;

    document.getElementById(
        "injector-level"
    ).innerText = injectorLevel;

    document.getElementById(
    "prestige-cost"
).innerText = formatNumber(
    5000 + (timeline * 2500)
);



document.getElementById(
    "battery-cost"
).innerText = formatNumber(
    getTotalCost(batteryLevel, 50)
);

document.getElementById(
    "generator-cost"
).innerText = formatNumber(
    getTotalCost(generatorLevel, 250)
);    

  document.getElementById(
    "plasma-cost"
).innerText = formatNumber(
    getTotalCost(plasmaLevel, 1000)
);

    document.getElementById(
        "eps-cost"
    ).innerText = formatNumber(
    getTotalCost(epsLevel, 5000)
);

    document.getElementById(
        "injector-cost"
    ).innerText = formatNumber(
    getTotalCost(injectorLevel, 25000)
);

    document.getElementById(
    "calibration-level"
).innerText = calibrationLevel;


document.getElementById(
    "calibration-output"
).innerText = calibrationLevel;


document.getElementById(
    "calibration-cost"
).innerText = formatNumber(
    getTotalCost(calibrationLevel, 100000)
);

    document.getElementById("battery-output").innerText =
    formatNumber(batteryLevel*2);

document.getElementById("generator-output").innerText =
    formatNumber(generatorLevel * 5);

document.getElementById("plasma-output").innerText =
    formatNumber(plasmaLevel * 15);

document.getElementById("eps-output").innerText =
    formatNumber(epsLevel * 50);

document.getElementById("injector-output").innerText =
    formatNumber(injectorLevel * 200);
    
}


// INITIAL DISPLAY
function formatNumber(value){

    if(value < 1000){
        return Math.floor(value);
    }

    return value.toExponential(2).replace("+", "");

}

function setBuyAmount(amount) {

    buyAmount = amount;

    alert("Buy amount = " + buyAmount);

    updateDisplay();

    document.querySelectorAll(".buy-selector button").forEach(button => {
        button.style.background = "";
    });

    document.getElementById("buy" + amount).style.background = "#4da6ff";
}

function getTotalCost(currentLevel, baseCost) {

    let total = 0;

    for (let i = 0; i < buyAmount; i++) {
        total += (currentLevel + i + 1) * baseCost;
    }

    return total;
}

function calculateProduction() {

    // Base Reactor
    let basePower = 1 + (batteryLevel * 2);

    // Fusion Generators boost batteries
    let batteryOutput =
        basePower * (1 + (generatorLevel * 0.10));

    // Plasma boosts generators
    let generatorOutput =
        batteryOutput * (1 + (plasmaLevel * 0.15));

    // EPS boosts engineering
    let engineeringOutput =
        generatorOutput * (1 + (epsLevel * 0.05));

    // Injectors boost warp output
    let warpOutput =
        engineeringOutput * (1 + (injectorLevel * 0.20));

    // Warp Core Calibration
    let finalOutput =
        warpOutput * (1 + (calibrationLevel * 0.01));

    energyPerSecond = finalOutput;

}

updateDisplay();
setBuyAmount(1);
