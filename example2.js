import {Example} from "./example.js";

export class Example2 extends Example {
    constructor(num) {
        super(num);
    }

    run() {
        var a = 1;

        var foo = function() {
            var a = 2;
        };

        foo();

        console.log(a);
    }
}