import { Example } from './example.js'

export class Example12 extends Example {
    constructor(...args) {
        super(...args)
    }

    run() {
        var employeeId = 'aq123';
        (function Employee() {
            try {
                throw 'foo123'
            } catch (employeeId) {
                console.log(employeeId)
            }
            console.log(employeeId)
        })()
    }
}
