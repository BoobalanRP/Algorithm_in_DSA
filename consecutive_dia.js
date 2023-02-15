let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
    string += " ".repeat(n-i);
    for (let j = 1; j <= i; j++) {
        string += j + " ";
    }
    string += "\n";
}
for (let i = n - 1; i >= 1; i--) {
    string += " ".repeat(n-i);
    for (let j = 1; j <= i; j++) {
        string += j + " ";
    }
    string += "\n";
}
console.log(string);
