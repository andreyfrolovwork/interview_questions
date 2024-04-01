import { Example } from './example.js'

export class Example7 extends Example {
    constructor(...args) {
        super(...args)
    }

    run() {
        const first = new Promise((resolve, reject) => {
            setTimeout(resolve, 500, 'One')
        })

        const second = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 'Two')
        })

        Promise.race([first, second]).then((res) => console.log(res))
    }
}
