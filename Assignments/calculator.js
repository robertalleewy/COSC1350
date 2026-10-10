
/*
Name: Robert Allee
Course: COSC1350
Purpose: Calculate a tip based on service quality.
*/

// Wait until the webpage is fully loaded.
window.addEventListener("load", function () {

    // Connect the button to the calculateTip function.
    document.getElementById("calculateButton")
        .addEventListener("click", calculateTip);

});

// Function to calculate the tip.
function calculateTip() {

    // Get the bill amount.
    let billAmount = document.getElementById("bill-amount").value;

    // Get the selected service quality.
   let serviceQuality = document.getElementById("service-quality").value;

    // Check for an empty or invalid bill amount.
    if (billAmount === "" || Number(billAmount) <= 0) {
        document.getElementById("tipResult").textContent =
            "Please enter a valid bill amount.";
        return;
    }

    // Calculate the tip.
    let tip = Number(billAmount) * Number(serviceQuality);

    // Format the tip to two decimal places.
    let formattedTip = tip.toFixed(2);

    // Display the result.
    document.getElementById("tipResult").textContent =
        "Your tip amount is: $" + formattedTip;

}
