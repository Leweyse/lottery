import getRandom from './helpers/getRandom.js';
import mainContent from './pages/main.js'
import table from './components/sections/table.section.js';

mainContent();

let main = document.getElementById('main');
let box = document.querySelector('.box');
let result = document.getElementById('result');

let input = document.getElementById('number');
let runBtn = document.getElementById('run');
let hiddenBtn = document.getElementById('hidden');

let copyResult = null;

let interval = null;

let originalNode = [...box.childNodes];

runBtn.addEventListener('click', function() {
    if (result.childNodes.length < 6) {
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
    } else {
        box.innerHTML = "";

        copyResult = result.cloneNode(true);
        copyResult.removeAttribute('id');

        document.querySelector('.table').appendChild(copyResult);

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
    
})