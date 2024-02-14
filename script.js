
    let currentText = "Wanna be P'plai valentine?";
    
    document.getElementById("no").addEventListener("click", function() {
        if (currentText === "Wanna be P'plai valentine?") {
            currentText = "Sorry to hear that :(";
        } else if (currentText === "Sorry to hear that :(") {
            currentText = "Are you sure?";
        } else if (currentText === "Are you sure?") {
            currentText = "Common don't be like Thisss";
        } else if (currentText === "Common don't be like Thisss") {
            currentText = "Say Yes plssssss";
        } else if (currentText === "Say Yes plssssss") {
            currentText = "Ma love,Don't be cruel";
        } else if (currentText === "Ma love,Don't be cruel") {
            currentText = "Noooo,let's try again";       
        } else {
            currentText = "Wanna be P'plai valentine?";
        }
        document.querySelector("label[for='answer']").textContent = currentText;
    });

