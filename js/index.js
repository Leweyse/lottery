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

