window.interview_tasks = window.interview_tasks || []
window.interview_tasks.push({
    qNum: 12,
    run: function () {
        var obj1 = { n: 1 }
        var obj2 = obj1
        obj1.x = obj1 = { n: 2 }
        console.log(obj1.x)

        const _result = `Порядок выполнения в JavaScript здесь ключевой:
1. Левая часть (\`obj1.x\`) вычисляется ПЕРВОЙ. JavaScript определяет, что нужно будет записать в свойство 'x' объекта, на который в этот момент указывает \`obj1\` (это \`{ n: 1 }\`).
2. Затем вычисляется правая часть (\`obj1 = { n: 2 }\`). Переменная \`obj1\` теперь ссылается на совершенно новый объект \`{ n: 2 }\`.
3. Наконец, результат правой части (объект \`{ n: 2 }\`) присваивается свойству 'x' СТАРОГО объекта (из шага 1).
В итоге, \`console.log(obj1.x)\` обращается к новому объекту \`obj1\`, у которого свойства \`x\` нет. Поэтому результат — undefined.`
        console.log('Объяснение: ', _result)
    },
    code: `var obj1 = { n: 1 }
var obj2 = obj1
obj1.x = obj1 = { n: 2 }
console.log(obj1.x)`,
})