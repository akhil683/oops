let gfNames = ["shriya", "sigma", "sharika", "priyanshi", "anjali", "preeti", "sakshi", "crush"]
let bfNames = ["dikshant", "dushyant", "aditya", "pankaj", "gaurav", "yadav", "osho", "priyanshu", "akhil"]
let gfLocation = document.getElementById("gfname");
let bfLocation = document.getElementById("myname");

function hisGf() {

    let randomNumber2 = Math.floor(Math.random() * 8);
    gfLocation.textContent = gfNames[randomNumber2];

    let randomNumber1 = Math.floor(Math.random() * 8);
    bfLocation.textContent = bfNames[randomNumber1];
}