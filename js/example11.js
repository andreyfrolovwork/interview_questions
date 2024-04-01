import { Example } from './example.js'

export class Example11 extends Example {
    constructor(...args) {
        super(...args)
    }

    run() {
        const container = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')

        p1.textContent = 'Paragraph 1'
        p2.textContent = 'Paragraph 2'
        p1.style.marginBottom = '30px'
        p2.style.marginTop = '40px'

        container.append(p1, p2)
        container.style.visibility = 'hidden'
        container.style.position = 'absolute'

        document.body.append(container)

        const distance =
            p2.getBoundingClientRect().top - p1.getBoundingClientRect().bottom

        container.remove()

        console.log(distance)
    }
}
