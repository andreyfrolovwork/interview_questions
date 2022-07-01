import {Example} from "./example.js";

export class Example1 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        console.log("I");

        setTimeout(() => {
            console.log("love")
        }, 0);

        console.log("javascript");
    }
}