const increaseSpeed = document.getElementById("increaseSpeed");
const decreaseSpeed = document.getElementById("decreaseSpeed");
const speedDisplay = document.getElementById("speed");

const increaseDiskSize = document.getElementById("increaseDiskSize");
const decreaseDiskSize = document.getElementById("decreaseDiskSize");
const diskSize = document.getElementById("diskSize");

const increaseTemp = document.getElementById("increaseTemp")
const decreaseTemp = document.getElementById("decreaseTemp")
const tempDisplay = document.getElementById("temp");
const batteryCapacity = document.getElementById("batteryCapacity")
const price = document.getElementById('price')

const disks = document.querySelectorAll('.disks img');

let currentSpeed = parseInt(speedDisplay.innerText);
let currentDiskSize = parseInt(diskSize.innerText);
let currentTemp = parseInt(tempDisplay.innerText);
let maxBatteryCapacity = 750;
let currentBatteryCapacity = maxBatteryCapacity;
let basePrice = 89990;

increaseSpeed.onclick = () => {
    if (currentSpeed < 180) {
        currentSpeed += 10;
        speedDisplay.innerText = currentSpeed;
        updateWheelAnimation();
        currentBatteryCapacity = maxBatteryCapacity - (currentSpeed * 2);
        batteryCapacity.innerText = `${currentBatteryCapacity}км`;
    }
};

decreaseSpeed.onclick = () => {
    if (currentSpeed > 0) {
        currentSpeed -= 10;
        speedDisplay.innerText = currentSpeed;
        updateWheelAnimation();
        currentBatteryCapacity = maxBatteryCapacity - (currentSpeeditit * 2);
        batteryCapacity.innerText = `${currentBatteryCapacity}км`;
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
        diskSize.innerText = currentDiskSize;
        updatePrice();
    }
};

decreaseDiskSize.onclick = () => {
    if (currentDiskSize > 19) { 
        currentDiskSize -= 1;
        diskSize.innerText = currentDiskSize;
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
    batteryCapacity.innerText = `${currentBatteryCapacity}км`;
}

function updatePrice() {
    let newPrice = basePrice + (currentDiskSize - 19) * 2000;
    price.innerText = `$${newPrice.toString()}`;
    
    let newSize = 113 + (currentDiskSize - 19) * 3;
    disks.forEach(disk => {
        disk.style.width = `${newSize}px`;
        disk.style.height = `${newSize * 0.8}px`;
    });
}
