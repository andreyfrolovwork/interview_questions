window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 1,
    run: function () {
        console.log('1')

        Promise.resolve().then(() => {
            console.log('2')

            Promise.resolve().then(() => {
                console.log('3')
            })

            setTimeout(() => {
                console.log('4')

                Promise.resolve().then(() => {
                    console.log('5')
                })

                setTimeout(() => {
                    console.log('6')
                }, 0)
            }, 0)

            Promise.resolve().then(() => {
                console.log('7')
            })

            console.log('8')
        })

        setTimeout(() => {
            console.log('9')

            Promise.resolve().then(() => {
                console.log('10')
            })

            console.log('11')
        }, 0)

        console.log('12')
    },
    code: `console.log('1')

Promise.resolve().then(() => {
    console.log('2')

    Promise.resolve().then(() => {
        console.log('3')
    })

    setTimeout(() => {
        console.log('4')

        Promise.resolve().then(() => {
            console.log('5')
        })

        setTimeout(() => {
            console.log('6')
        }, 0)
    }, 0)

    Promise.resolve().then(() => {
        console.log('7')
    })

    console.log('8')
})

setTimeout(() => {
    console.log('9')

    Promise.resolve().then(() => {
        console.log('10')
    })

    console.log('11')
}, 0)

console.log('12')`,
})
