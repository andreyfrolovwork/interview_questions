import {Example} from "./example.js";

export class Example3 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        function myFunction() {
            var num = 1;

            function showNum() {
                console.log(num);
            }

            num++;
            return showNum;
        }

        var number = myFunction();
        number();
    }
}