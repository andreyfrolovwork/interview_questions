window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 7,
    run: function () {
        const first = new Promise((resolve, reject) => {
            setTimeout(resolve, 500, 'One')
        })

        const second = new Promise((resolve, reject) => {
            setTimeout(resolve, 100, 'Two')
        })

        Promise.race([first, second]).then((res) => console.log(res))
    },
    code: `const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'One')
})

const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Two')
})

Promise.race([first, second]).then((res) => console.log(res))`,
})
