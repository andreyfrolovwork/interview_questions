(function () {
    class App {
        constructor(tasks) {
            this.tasks = tasks
            this.currentTask = null
            this.originalConsole = { ...console }

            this.elements = {
                taskList: document.getElementById('task-list'),
                taskTitle: document.getElementById('task-title'),
                taskCode: document.getElementById('task-code'),
                runBtn: document.getElementById('run-btn'),
                output: document.getElementById('output'),
            }

            this.init()
            this.patchConsole()
        }

        patchConsole() {
            const outputEl = this.elements.output
            const customConsole = (method, ...args) => {
                this.originalConsole[method](...args)
                const line = document.createElement('div')
                line.className = `output-line output-${method}`
                line.textContent = args
                    .map((arg) => {
                        if (arg instanceof Element && arg.outerHTML) {
                            return arg.outerHTML
                        }
                        try {
                            return JSON.stringify(arg, null, 2)
                        } catch (e) {
                            return String(arg)
                        }
                    })
                    .join(' ')
                outputEl.appendChild(line)
                outputEl.scrollTop = outputEl.scrollHeight
            }

            Object.keys(console).forEach((method) => {
                if (typeof console[method] === 'function') {
                    console[method] = (...args) =>
                        customConsole(method, ...args)
                }
            })
        }

        init() {
            this.elements.taskList.innerHTML = ''
            this.tasks.forEach((task, index) => {
                const li = document.createElement('li')
                li.textContent = `Task ${index + 1}`
                li.addEventListener('click', () => this.selectTask(task, li))
                this.elements.taskList.appendChild(li)
            })

            this.elements.runBtn.addEventListener('click', () =>
                this.runCurrentTask(),
            )

            if (this.tasks.length > 0) {
                this.selectTask(
                    this.tasks[0],
                    this.elements.taskList.firstChild,
                )
            }
        }

        selectTask(task, liElement) {
            this.currentTask = task

            const activeItem = this.elements.taskList.querySelector('.active')
            if (activeItem) {
                activeItem.classList.remove('active')
            }
            liElement.classList.add('active')

            this.elements.taskTitle.textContent = `Task ${task.qNum}`
            this.elements.taskCode.textContent = task.code
            this.elements.output.innerHTML = ''
        }

        runCurrentTask() {
            if (!this.currentTask) return
            this.elements.output.innerHTML = ''
            try {
                this.currentTask.run()
            } catch (e) {
                console.error(e)
            }
        }
    }

    // Initialize the app with the globally available tasks
    window.addEventListener('load', () => {
        new App(window.interview_tasks || [])
    })
})()


/* 

Конечно, вот краткое описание для каждой задачи:
example1.js: Event Loop. Проверяет понимание порядка выполнения microtask (Promise) и macrotask (setTimeout).
example2.js: Область видимости (Scope). Проверяет понимание того, как переменные с одинаковыми именами ведут себя в разных областях видимости.
example3.js: Замыкания (Closures). Проверяет, как внутренняя функция сохраняет доступ к переменным из внешней функции даже после того, как внешняя функция завершила свою работу.
example4.js: Порядок присваивания. Проверяет понимание того, что в JavaScript левая часть выражения (операнд) вычисляется до присваивания значения.
example5.js: Область видимости и замыкания. Проверяет, сможет ли кандидат определить, из какой области видимости функция возьмет значение переменной.
example6.js: Event Loop и var. Классическая задача, демонстрирующая проблему использования var в циклах с асинхронными вызовами (например, setTimeout).
example7.js: Promise.race(). Проверяет понимание работы Promise.race() и какой из промисов разрешится первым.
example8.js: Конструкторы и прототипы. Проверяет понимание разницы между свойствами, созданными в конструкторе (this.greet), и свойствами прототипа (sayHello), а также работу hasOwnProperty.
example9.js: Передача объектов по ссылке и параметры по умолчанию. Проверяет понимание того, когда объект мутирует, а когда создается его копия.
example10.js: Точность вычислений с плавающей точкой. Проверяет знание о неточности представления десятичных дробей в бинарной системе.
example11.js: CSS Box Model и getBoundingClientRect. Проверяет знание о схлопывании margin (margin collapsing) у соседних элементов.
example12.js: Область видимости в catch. Проверяет понимание того, что переменная, объявленная в блоке catch, имеет локальную область видимости только внутри этого блока.
*/