import {Example} from "./example.js";

export class Example4 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        var obj1 = {n: 1};
        var obj2 = obj1;
        obj1.x = obj1 = {n: 2};
        console.log(obj1.x);
    }
}