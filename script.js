function convert() {
    // Get the input value
    var amount = document.getElementById("amount").value;
  
    // Perform the conversion
    var rate = 0.019; // Use the current exchange rate between INR and AUD
    var result = amount * rate;
  
    // Display the result
    document.getElementById("result").innerHTML = "Converted amount in AUD: " + result.toFixed(2);
  }
  