export class Example {

	#num;

	constructor(num) {
		this.#num = num;
		this.init();
	}

	init() {
		const body = document.body;
		body.innerHTML = "";
		fetch(`./example${this.#num}.js`)
			.then(response => response.text())
			.then((text) => {
				const h1 = document.createElement("h1");
				const pre = document.createElement("pre");
				const code = document.createElement("code");
				const btn = document.createElement("button");
				text = text.slice(text.indexOf("run() {"), -1);
				text.split("\n")
				const arr = text.split("\n");
				const tab = "    ";
				arr.forEach((line, index) => {
					if(line.startsWith(tab)) {
						arr[index] = line.slice(tab.length);
					}

				});

				text = arr.join("\n");
				text = text.replace("run()", "function()");

				btn.textContent = "Run";
				h1.textContent = `Example ${this.#num}`;
				pre.append(code);
				code.textContent = text;
				body.append(h1, pre, btn);

				btn.addEventListener("click", (event) => {
					console.info(`\n\n===== Example ${this.#num} result: =====\n`);
					this.run();
					body.dispatchEvent(new Event("executed"));

					if(btn.parentNode) {

						btn.textContent = "Next";
						btn.addEventListener("click", () => {
							body.dispatchEvent(new Event("next"));
						}, {once: true});
					}
				}, {once: true});
			});
	}
}