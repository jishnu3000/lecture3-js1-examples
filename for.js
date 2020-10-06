function setRowsColor() {
    const table = document.getElementById("products");
    for (var i = 0; i < table.rows.length; i++) {
        let row = table.rows[i];
        switch (i % 3) {
            case 0:
                row.style.backgroundColor = "orange";
                break;
            case 1:
                row.style.backgroundColor = "cyan";
                break;
            default:
                row.style.backgroundColor = "green";
        }
    }
}