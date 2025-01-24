const increaseSpeed = document.getElementById("increaseSpeed");
const decreaseSpeed = document.getElementById("decreaseSpeed");
const speedDisplay = document.getElementById("speed");

const increaseDiskSize = document.getElementById("increaseDiskSize");
const decreaseDiskSize = document.getElementById("decreaseDiskSize");
const diskSizeDisplay = document.getElementById("diskSize");

const increaseTemp = document.querySelectorAll(".params_elem:nth-child(2) .btns button")[0];
const decreaseTemp = document.querySelectorAll(".params_elem:nth-child(2) .btns button")[1];
const tempDisplay = document.getElementById("temp");
const batteryCapacityDisplay = document.querySelector(".about_car h2");
const priceDisplay = document.querySelector(".about_car div:nth-child(2) h2");

const disks = document.querySelectorAll('.disks img');

let currentSpeed = parseInt(speedDisplay.innerText);
let currentDiskSize = parseInt(diskSizeDisplay.innerText);
let currentTemp = parseInt(tempDisplay.innerText);
let maxBatteryCapacity = 750;
let currentBatteryCapacity = maxBatteryCapacity;
let basePrice = 89990;

increaseSpeed.onclick = () => {
    currentSpeed += 10;
    speedDisplay.innerText = currentSpeed;
    updateWheelAnimation();
};

decreaseSpeed.onclick = () => {
    if (currentSpeed > 0) {
        currentSpeed -= 10;
        speedDisplay.innerText = currentSpeed;
        updateWheelAnimation();
    }
};

increaseTemp.onclick = () => {
    if (currentTemp < 50) {
        currentTemp += 1;
        tempDisplay.innerText = currentTemp;
        updateBatteryCapacity();
    }
};

decreaseTemp.onclick = () => {
    if (currentTemp > -10) {
        currentTemp -= 1;
        tempDisplay.innerText = currentTemp;
        updateBatteryCapacity();
    }
};

increaseDiskSize.onclick = () => {
    if (currentDiskSize < 21) {
        currentDiskSize += 1;
        diskSizeDisplay.innerText = currentDiskSize;
        updatePrice();
    }
};

decreaseDiskSize.onclick = () => {
    if (currentDiskSize > 19) { 
        currentDiskSize -= 1;
        diskSizeDisplay.innerText = currentDiskSize;
        updatePrice();
    }
};

function updateWheelAnimation() {
    const animationDuration = currentSpeed > 0 ? `${10 / currentSpeed}s` : '0s';
    disks.forEach(disk => {
        disk.style.animationDuration = animationDuration;
    });
}

function updateBatteryCapacity() {
    currentBatteryCapacity = maxBatteryCapacity - (currentTemp * 2);
    batteryCapacityDisplay.innerText = `${currentBatteryCapacity}км`;
}

function updatePrice() {
    let newPrice = basePrice + (currentDiskSize - 19) * 2000;
    priceDisplay.innerText = `$${newPrice.toLocaleString()}`;
    
    let newSize = 113 + (currentDiskSize - 19) * 3;
    disks.forEach(disk => {
        disk.style.width = `${newSize}px`;
        disk.style.height = `${newSize * 0.8}px`;
    });
}
