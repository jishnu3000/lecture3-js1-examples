function getAnswer() {
    let answer = "";
    while (answer = prompt("Please enter your answer", "?")) {
        if (answer != "Daulphin") {
            window.alert("INCORRECT");
        } else {
            break;
        }
    }
    if (answer != "Daulphin") {
        window.alert("INCORRECT");
    } else {
        document.getElementById("resp").innerHTML = "Daulphin!";
        window.alert("CORRECT");
    }

}