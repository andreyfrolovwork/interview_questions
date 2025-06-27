window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 9,
    run: function () {
        const client = {
            name: 'Mr. Smith',
            age: 21,
        }

        const increaseAge = (x = { ...client }) => (x.age += 1)
        const changeAgeAndName = (x = { ...client }) => {
            x.age += 1
            x.name = 'Ivan'
        }

        increaseAge(client)
        changeAgeAndName()
        console.log(client)
    },
    code: `const client = {
    name: 'Mr. Smith',
    age: 21,
}

const increaseAge = (x = { ...client }) => (x.age += 1)
const changeAgeAndName = (x = { ...client }) => {
    x.age += 1
    x.name = 'Ivan'
}

increaseAge(client)
changeAgeAndName()
console.log(client)`,
})
