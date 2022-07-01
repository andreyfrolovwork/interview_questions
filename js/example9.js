import {Example} from "./example.js";

export class Example9 extends Example {
    constructor(...args) {
        super(...args);
    }

    run() {
        const client = {
            name: "Mr. Smith",
            age: 21
        };

        const increaseAge = (x = { ...client }) => x.age += 1;
        const changeAgeAndName = (x = { ...client }) => {
            x.age += 1
            x.name = "Ivan"
        };

        increaseAge(client);
        changeAgeAndName();
        console.log(client);
    }
}