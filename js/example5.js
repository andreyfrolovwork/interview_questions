window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 5,
    run: function () {
        var n = 41
        var obj = {
            n: 10,
            f: function () {
                return n
            },
        }

        console.log(obj.f())
    },
    code: `var n = 41
var obj = {
    n: 10,
    f: function () {
        return n
    },
}

console.log(obj.f())`,
})
