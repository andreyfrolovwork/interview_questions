import { Example } from './example.js'

export class Example8 extends Example {
    constructor(...args) {
        super(...args)
    }

    run() {
        function DoSomething() {
            this.name = 'Alice'
            this.greet = function () {
                console.log('Hello, my name is ' + this.name)
            }
            return 42
        }
        DoSomething.prototype.sayHello = function () {
            console.log('Hello from prototype!')
        }
        const result = new DoSomething()
        console.log(result.hasOwnProperty('greet'))
        console.log(result.hasOwnProperty('sayHello'))
        console.log('result:', result)
    }
}
