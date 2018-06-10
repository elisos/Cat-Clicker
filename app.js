
const counter1 = document.getElementById('counter1');
counter1.innerText = 0;
let counter1Number = 0;
const catImage1 = document.getElementById('cat1');
catImage1.addEventListener('click', function () {
++counter1Number;
counter1.innerHTML= counter1Number;
        });

const counter2 = document.getElementById('counter2');
counter2.innerText = 0;
let counter2Number = 0;
const catImage2 = document.getElementById('cat2');
catImage2.addEventListener('click', function () {
++counter2Number;
counter2.innerHTML= counter2Number;
        });