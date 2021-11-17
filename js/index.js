import getRandom from './helpers/getRandom.js';
import mainContent from './pages/main.js'

mainContent();

let result = document.getElementById('result');
let box = document.querySelector('.box');
let table = document.querySelector('.table');

let input = document.getElementById('number');
let runBtn = document.getElementById('run');
let hiddenBtn = document.getElementById('hidden');

let copyResult = null;

let interval = null;

let originalNode = [...box.childNodes];

runBtn.addEventListener('click', function() {
    runBtn.style.pointerEvents = 'all';

    let arr = [...box.childNodes];
    let random = getRandom(arr, 1);

    clearInterval(interval);

    if (result.childNodes.length < 5) {
        runBtn.style.pointerEvents = 'none';
        interval = setInterval(() => {
            runBtn.click();
        }, 500);
    }

    result.appendChild(document.getElementById(`${random[0].id}`));

    if (result.childNodes.length >= 6) {

        box.innerHTML = "";

        copyResult = result.cloneNode(true);
        copyResult.removeAttribute('id');

        table.appendChild(copyResult);

        originalNode.map(elem => {
            box.appendChild(elem);
        })
        
        runBtn.click();

        result.innerHTML = "";
    }
});

input.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') hiddenBtn.click();
})

hiddenBtn.addEventListener('click', function() {
    let value = input.value;
    hiddenBtn.style.pointerEvents = 'none';

    for (let i = 0; i < (value * 6); i++) {
        runBtn.click();
    }
})