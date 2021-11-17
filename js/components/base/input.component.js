import button from "./button.component.js";

function input(parent, id) {
    let input = document.createElement('input');

    input.setAttribute('id', `${id}`);
    input.setAttribute('type', `number`);
    input.setAttribute('name', `num`);
    input.setAttribute('placeholder', `0`);
    input.setAttribute('min', `1`);
    input.setAttribute('max', `1000000`);

    button(parent, 'hidden');

    parent.appendChild(input);
}

export default input;