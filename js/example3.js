window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 3,
    run: function () {
        function myFunction() {
            var num = 1

            function showNum() {
                console.log(num)
            }

            num++
            return showNum
        }

        var number = myFunction()
        number()
    },
    code: `function myFunction() {
    var num = 1

    function showNum() {
        console.log(num)
    }

    num++
    return showNum
}

var number = myFunction()
number()`,
})
