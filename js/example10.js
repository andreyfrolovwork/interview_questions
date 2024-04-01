import { Example } from './example.js'

export class Example10 extends Example {
    constructor(...args) {
        super(...args)
    }

    run() {
        const left = (0.1 + 0.2) * 10
        const right = 3
        console.log(left === right)
    }
}
