function getAnswer() {
    let answer = "";
    do {
        answer = prompt("Please enter your answer", "?")
        if (answer != "Daulphin") {
            window.alert("INCORRECT");
        } else {
            break;
        }
    } while (answer != "Daulphin");

    if (answer != "Daulphin") {
        window.alert("INCORRECT");
    } else {
        document.getElementById("resp").innerHTML = "Daulphin!";
        window.alert("CORRECT");
    }

}