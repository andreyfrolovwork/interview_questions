import {Example1} from "./example1.js";
import {Example2} from "./example2.js";
import {Example3} from "./example3.js";
import {Example4} from "./example4.js";
import {Example5} from "./example5.js";
import {Example6} from "./example6.js";
import {Example7} from "./example7.js";
import {Example8} from "./example8.js";
import {Example9} from "./example9.js";
import {Example10} from "./example10.js";
import {Example11} from "./example11.js";

export class App {
	constructor() {

		const body = document.body;
		const examples = this.#shuffleArray(
			[Example1, Example2, Example3, Example4, Example5, Example6, Example7, Example8, Example9, Example10, Example11]
		);
		// const examples = [Example1, Example2, Example3, Example4, Example5, Example6, Example7, Example8, Example9, Example10, Example11]
		const examplesLength = examples.length;
		let currentExampleNum = 1;
		let example;

		const showExample = () => {
			example = examples[currentExampleNum - 1];
			new example.exampleClass(example.exampleNum, currentExampleNum);
		};

		showExample();


		body.addEventListener("next", (event) => {
			currentExampleNum++;
			if (currentExampleNum <= examplesLength) {
				console.log("-----------------------------")
				showExample();
			}
		});

		body.addEventListener("executed", (event) => {
			if(currentExampleNum === examplesLength) {
				document.body.querySelector("button").remove();
			}
		});
	}

	#shuffleArray(array) {
		const tempArray = array.map((el, i) => i);
		const shuffleMap = tempArray.sort((a, b) => {
			const random = Math.random();
			return (random < 0.33) ? -1 : (random < 0.66 ? 1 : 0);
		});

		return tempArray.map((el, i) => {
			const exampleIndex = shuffleMap[i];
			return {
				exampleClass: array[i],
				exampleNum: i + 1
			}
		});
	}
}

new App();
