
window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 4,
    run: function () {
        var employeeId = 'aq123'
        ;(function Employee() {
            try {
                throw 'foo123'
            } catch (employeeId) {
                console.log(employeeId)
            }
            console.log(employeeId)
        })()
    },
    code: `var employeeId = 'aq123';
(function Employee() {
    try {
        throw 'foo123'
    } catch (employeeId) {
        console.log(employeeId)
    }
    console.log(employeeId)
})()`,
})
