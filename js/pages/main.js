import button from "../components/base/button.component.js";
import input from "../components/base/input.component.js";

import box from "../components/sections/box.section.js";
import table from "../components/sections/table.section.js";

function mainContent() {
    const main = document.getElementById('main');

    box(main, 'start', 45);
    button(main, 'run');
    input(main, 'number');
    box(main, 'result');
    table(main);
}

export default mainContent;