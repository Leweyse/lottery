import boxNumber from "../base/boxNumber.component.js";

function box(parent, id, limit) {
    let section = document.createElement('section');

    section.classList.add('box');
    section.setAttribute('id', `${id}`);

    if (limit !== null) {
        for (let i = 1; i <= limit; i++) {
            section.appendChild(boxNumber(i));
        }   
    }

    parent.appendChild(section);
}

export default box;