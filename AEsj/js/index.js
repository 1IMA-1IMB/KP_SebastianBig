function litersToGallons(liters) {
    return liters * 0.264172;
}

function gallonsToLiters(gallons) {
    return gallons * 3.78541;
}

const liters = 10;
const gallons = 2.64172;

const convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', () => {
    const litersInput = document.getElementById('litersInput').value;
    const gallonsInput = document.getElementById('gallonsInput').value;

    const convertedLiters = gallonsToLiters(gallonsInput);
    const convertedGallons = litersToGallons(litersInput);

    console.log(`${litersInput} liters is equal to ${convertedGallons} gallons.`);
    console.log(`${gallonsInput} gallons is equal to ${convertedLiters} liters.`);
});

