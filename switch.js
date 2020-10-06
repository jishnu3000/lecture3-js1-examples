function convert() {
    const c_input = document.getElementById('celsius');
    let celsius_temp = c_input.value;
    let fahren_temp = 9 * celsius_temp / 5 + 32.0;
    const f_span = document.getElementById('fahrenheit');
    f_span.innerHTML = fahren_temp;
    switch (true) {
        case (celsius_temp < 20):
            f_span.style.color = "blue";
            break;
        case (celsius_temp > 20 && celsius_temp <= 35):
            f_span.style.color = "orange";
            break;

        case (celsius_temp > 35 && celsius_temp <= 42):
            f_span.style.color = "red";
            break;
        default:
            f_span.style.color = "black";
            break;
    }

}