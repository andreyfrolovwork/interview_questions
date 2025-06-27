window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 11,
    run: function () {
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
    },
    code: `const container = document.createElement('div')
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

console.log(distance)`,
})
