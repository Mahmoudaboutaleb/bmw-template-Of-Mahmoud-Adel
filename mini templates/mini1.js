let colorSet = setInterval(() =>{
    let college = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
let all = [];
let random = college[Math.floor(Math.random() * college.length)];
for ( i = 0; i < 6; i++){
    let random = college[Math.floor(Math.random() * college.length)];
    all.push(random);
}
let color = `#${all.join("")}`
document.body.style.background = color
    
},5000)
//////////////////////////////////////////////
let serial = document.querySelector('.serial');
let btn = document.querySelector('.generate');
btn.onclick = function () {
    let serialNumber = "0123456789abcdefghijklmnopqrstuyzABCDEFGHIJKLMNOPQRSTUYZ"
    let num = 10;
    let randomSerial = "";
    for (i = 0; i < num; i++){
        randomSerial += serialNumber[Math.floor(Math.random() * serialNumber.length)]; 
    }
    serial.innerHTML = randomSerial
}
