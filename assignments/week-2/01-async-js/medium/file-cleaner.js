const fs = require("fs");

fs.readFile("a.txt", "utf-8", cb);

function cb(err, data) {
    let str = data.replace(/\s+/g, " ").trim();
    fs.writeFile("file.txt", str, () => console.log("data formatted!!"));
}