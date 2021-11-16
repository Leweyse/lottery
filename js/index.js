import getRandom from './helpers/getRandom.js';
import mainContent from './pages/main.js'

mainContent();

let main = document.getElementById('main');
let box = document.querySelector('.box');
let result = document.getElementById('result');
let runBtn = document.getElementById('run');

let copyResult = null;

let interval = null;

let arr = [...box.childNodes];

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
        
        main.appendChild(copyResult);

        arr.map(elem => {
            box.appendChild(elem);
        })
        
        runBtn.click();

        result.innerHTML = "";
    }
});