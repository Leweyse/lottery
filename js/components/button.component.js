function button(parent, id) {
    let button = document.createElement('button');

    button.classList.add('number');
    button.setAttribute('id', `${id}`);

    button.innerHTML = `${id}`;

    parent.appendChild(button);
}

export default button;