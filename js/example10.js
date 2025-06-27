window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 10,
    run: function () {
        const left = (0.1 + 0.2) * 10
        const right = 3
        console.log(left === right)
    },
    code: `const left = (0.1 + 0.2) * 10
const right = 3
console.log(left === right)`,
})
