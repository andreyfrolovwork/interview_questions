import {Example} from "./example.js";

export class Example5 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        var n = 41;
        var obj = {
            n: 10,
            f: function() {
                return n;
            }
        }

        console.log(obj.f());
    }
}