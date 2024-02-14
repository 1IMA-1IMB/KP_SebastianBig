function convertVolume() {
    var inputVolume = document.getElementById("inputVolume").value;
    var selectFromUnit = document.getElementById("selectFromUnit").value;
    var selectToUnit = document.getElementById("selectToUnit").value;
    var result = document.getElementById("result");
    
    if (selectFromUnit === selectToUnit) {
        result.innerHTML = "bruk to forsjellig volumenheter for å konvertere.";
        return;
    }
    
    var convertedVolume;
    
    if (selectFromUnit === "ml") {
        if (selectToUnit === "l") {
            convertedVolume = inputVolume / 1000;
            result.innerHTML = inputVolume + " milliliter er lik " + convertedVolume + " liters.";
        } else if (selectToUnit === "oz") {
            convertedVolume = inputVolume * 0.033814;
            result.innerHTML = inputVolume + " milliliters er lik " + convertedVolume + " fluid ounces.";
        } else if (selectToUnit === "cup") {
            convertedVolume = inputVolume * 0.00422675;
            result.innerHTML = inputVolume + " milliliters er lik " + convertedVolume + " cups.";
        } else if (selectToUnit === "gal") { 
            convertedVolume = inputVolume * 0.000264172;
            result.innerHTML = inputVolume + " milliliters er lik " + convertedVolume + " gallons.";
        }
    } else if (selectFromUnit === "l") {
        if (selectToUnit === "ml") {
            convertedVolume = inputVolume * 1000;
            result.innerHTML = inputVolume + " liter er lik " + convertedVolume + " milliliters.";
        } else if (selectToUnit === "oz") {
            convertedVolume = inputVolume * 33.814;
            result.innerHTML = inputVolume + " liter er lik " + convertedVolume + " fluid ounces.";
        } else if (selectToUnit === "cup") {
            convertedVolume = inputVolume * 4.22675;
            result.innerHTML = inputVolume + " liter er lik " + convertedVolume + " cups.";
        } else if (selectToUnit === "gal") {
            convertedVolume = inputVolume * 0.264172;
            result.innerHTML = inputVolume + " liter er lik " + convertedVolume + " gallons.";
        }
    } else if (selectFromUnit === "oz") {
        if (selectToUnit === "ml") {
            convertedVolume = inputVolume * 29.5735;
            result.innerHTML = inputVolume + " fluid ounces er lik " + convertedVolume + " milliliters.";
        } else if (selectToUnit === "l") {
            convertedVolume = inputVolume * 0.0295735;
            result.innerHTML = inputVolume + " fluid ounces er lik " + convertedVolume + " liters.";
        } else if (selectToUnit === "cup") {
            convertedVolume = inputVolume * 0.125;
            result.innerHTML = inputVolume + " fluid ounces er lik " + convertedVolume + " cups.";
        } else if (selectToUnit === "gal") {
            convertedVolume = inputVolume * 0.0078125;
            result.innerHTML = inputVolume + " fluid ounces er lik " + convertedVolume + " gallons.";
        }
    } else if (selectFromUnit === "cup") {
        if (selectToUnit === "ml") {
            convertedVolume = inputVolume * 236.588;
            result.innerHTML = inputVolume + " cups er lik " + convertedVolume + " milliliters.";
        } else if (selectToUnit === "l") {
            convertedVolume = inputVolume * 0.236588;
            result.innerHTML = inputVolume + " cups er lik " + convertedVolume + " liters.";
        } else if (selectToUnit === "oz") {
            convertedVolume = inputVolume * 8;
            result.innerHTML = inputVolume + " cups er lik " + convertedVolume + " fluid ounces.";
        } else if (selectToUnit === "gal") {
            convertedVolume = inputVolume * 0.0625;
            result.innerHTML = inputVolume + " cups er lik " + convertedVolume + " gallons.";
        }
    } else if (selectFromUnit === "gal") { 
        if (selectToUnit === "ml") {
            convertedVolume = inputVolume * 3785.41;
            result.innerHTML = inputVolume + " gallons er lik " + convertedVolume + " milliliters.";
        } else if (selectToUnit === "l") {
            convertedVolume = inputVolume * 3.78541;
            result.innerHTML = inputVolume + " gallons er lik " + convertedVolume + " liters.";
        } else if (selectToUnit === "oz") {
            convertedVolume = inputVolume * 128;
            result.innerHTML = inputVolume + " gallons er lik " + convertedVolume + " fluid ounces.";
        } else if (selectToUnit === "cup") {
            convertedVolume = inputVolume * 16;
            result.innerHTML = inputVolume + " gallons er lik " + convertedVolume + " cups.";
        }
    }
}


function checkPalindrome() {
    var inputText = document.getElementById("inputText").value;
    var reversedText = inputText.split("").reverse().join("");
    if (inputText === reversedText) {
        document.getElementById("result").innerText = "The text is a palindrome!";
    } else {
        document.getElementById("result").innerText = "The text is not a palindrome.";
    }
}