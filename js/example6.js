import {Example} from "./example.js";

export class Example6 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        for(var i = 0; i < 10; i++) {
            setTimeout(function() {
                console.log(i);
            }, 0);
        }
    }
}