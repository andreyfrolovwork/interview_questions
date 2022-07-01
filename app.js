import {Example1} from "./example1.js";
import {Example2} from "./example2.js";
import {Example3} from "./example3.js";
import {Example4} from "./example4.js";
import {Example5} from "./example5.js";
import {Example6} from "./example6.js";

export class App {
	constructor() {

		const body = document.body;
		const examples = [Example1, Example2, Example3, Example4, Example5, Example6];
		const examplesLength = examples.length;

		let currentExample = 1;
		let example = new examples[currentExample - 1](1);

		body.addEventListener("next", (event) => {
			currentExample++;
			if (currentExample <= examplesLength) {
				example = new examples[currentExample - 1](currentExample);
			}
		});

		body.addEventListener("executed", (event) => {
			if(currentExample === examplesLength) {
				document.body.querySelector("button").remove();
			}
		});
	}
}

new App();