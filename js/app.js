import { Example1 } from './example1.js'
import { Example2 } from './example2.js'
import { Example3 } from './example3.js'
import { Example4 } from './example4.js'
import { Example5 } from './example5.js'
import { Example6 } from './example6.js'
import { Example7 } from './example7.js'
import { Example8 } from './example8.js'
import { Example9 } from './example9.js'
import { Example10 } from './example10.js'
import { Example11 } from './example11.js'
import { Example12 } from './example12.js'
export class App {
    constructor() {
        const body = document.body
        const examples = this.#shuffleArray([
            Example1,
            Example2,
            Example3,
            Example4,
            Example5,
            Example6,
            Example7,
            Example8,
            Example9,
            Example10,
            Example11,
            Example12,
        ])
        const examplesLength = examples.length
        let currentExampleNum = 1
        let example

        const showExample = () => {
            example = examples[currentExampleNum - 1]
            new example.exampleClass(example.exampleNum, currentExampleNum)
        }

        showExample()

        body.addEventListener('next', (event) => {
            currentExampleNum++
            if (currentExampleNum <= examplesLength) {
                console.log('-----------------------------')
                showExample()
            }
        })

        body.addEventListener('executed', (event) => {
            if (currentExampleNum === examplesLength) {
                document.body.querySelector('button').remove()
            }
        })
    }

    #shuffleArray(array) {
        const tempArray = array.map((el, i) => i)
        // const shuffleMap = tempArray.sort((a, b) => {
        //   const random = Math.random();
        //   return random < 0.33 ? -1 : random < 0.66 ? 1 : 0;
        // });

        return tempArray.map((el, i) => {
            // const exampleIndex = tempArray[i]
            return {
                exampleClass: array[i],
                exampleNum: i + 1,
            }
        })
    }
}

new App()


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