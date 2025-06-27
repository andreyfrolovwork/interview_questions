window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 6,
    run: function () {
        for (var i = 0; i < 10; i++) {
            setTimeout(function () {
                console.log(i)
            }, 0)
        }
    },
    code: `for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i)
    }, 0)
}`,
})
