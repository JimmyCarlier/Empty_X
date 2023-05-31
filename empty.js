// CARRE DE X VIDE
let size = 10;
let row = "";

for (j = 0; j < size; j++) {
    for (i = 0; i < size; i++) {
        if (j == 0 || j == size - 1 || i == 0 || i == size - 1) {
            row += "X";
        } else {
            row += " ";
        }
    }
    console.log(row);
    row = "";
}