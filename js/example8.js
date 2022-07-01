import {Example} from "./example.js";

export class Example8 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        const result = parseInt("7*6", 10);
        console.log(result);
    }
}