import {Example} from "./example.js";

export class Example10 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        const firstName = "Petr"
        console.log(firstName());
    }
}