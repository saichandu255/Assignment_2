function calculateFees() {
    var studentType = document.getElementById("studentType").value;
    var residency = document.getElementById("residency").value;
    var credits = parseInt(document.getElementById("credits").value);

    var registrationFee = 0;
    var tuitionRate = 0;

    // Determine registration fee and tuition rate based on inputs
    if (studentType === "bachelor" && residency === "in-state") {
        registrationFee = 200;
        tuitionRate = 350;
    } else if (studentType === "bachelor" && residency === "out-state") {
        registrationFee = 600;
        tuitionRate = 700;
    } else if (studentType === "master" && residency === "in-state") {
        registrationFee = 300;
        tuitionRate = 450;
    } else if (studentType === "master" && residency === "out-state") {
        registrationFee = 900;
        tuitionRate = 900;
    }

    // Calculate tuition and total fee
    var tuition = tuitionRate * credits;
    var totalFee = registrationFee + tuition;

    // Display the result
    document.getElementById("registrationFee").textContent = registrationFee;
    document.getElementById("tuitionRate").textContent = tuitionRate;
    document.getElementById("tuition").textContent = tuition;
    document.getElementById("totalFee").textContent = totalFee;

    // Show the result section
    document.getElementById("result").style.display = "block";
}
