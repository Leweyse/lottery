function boxNumber(num) {
    let div = document.createElement('div');
    let p = document.createElement('p');

    div.classList.add('ball');
    p.classList.add('number');
    div.setAttribute('id', `${num}`);

    p.innerHTML = `${num}`;

    div.appendChild(p);

    return div;
}

export default boxNumber;