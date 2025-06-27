window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 2,
    run: function () {
        var a = 1

        var foo = function () {
            var a = 2
        }

        foo()

        console.log(a)
    },
    code: `var a = 1

var foo = function () {
    var a = 2
}

foo()

console.log(a)`,
})
