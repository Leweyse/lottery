import button from "../components/button.component.js";
import box from "../sections/box.section.js";

function mainContent() {
    const main = document.getElementById('main');

    box(main, 'start', 45);
    button(main, 'run');
    box(main, 'result');
}

export default mainContent;