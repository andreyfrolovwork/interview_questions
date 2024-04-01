import { Example } from "./example.js";

export class Example12 extends Example {
  constructor(...args) {
    super(...args);
  }

  run() {
    console.log("Start");

    Promise.resolve().then(() => {
      console.log("1");

      Promise.resolve().then(() => {
        console.log("2");
      });

      setTimeout(() => {
        console.log("3");

        Promise.resolve().then(() => {
          console.log("4");
        });

        setTimeout(() => {
          console.log("5");
        }, 0);
      }, 0);

      Promise.resolve().then(() => {
        console.log("6");
      });

      и;
      console.log("7");
    });

    setTimeout(() => {
      console.log("8");

      Promise.resolve().then(() => {
        console.log("9");
      });

      console.log("10");
    }, 0);

    console.log("End");

    console.log("Start");

    // Микрозадача
    Promise.resolve().then(() => {
      console.log("Microtask 1");

      Promise.resolve().then(() => {
        console.log("Microtask inside microtask 1");
      });

      // Таймаут внутри микрозадачи
      setTimeout(() => {
        console.log("Timeout inside Microtask");

        Promise.resolve().then(() => {
          console.log("Microtask inside microtask  2");
        });

        setTimeout(() => {
          console.log(
            "Макро таска сработает только того как подойдет ее очередь в очерди МАКРОТАСОК",
          );
        }, 0);
      }, 0);

      Promise.resolve().then(() => {
        console.log("Microtask inside microtask  2");
      });

      // Завершение текущей микрозадачи
      console.log("End of Microtask 1");
    });

    setTimeout(() => {
      console.log("MACROtask 1");

      // Микрозадача внутри макрозадачи
      Promise.resolve().then(() => {
        console.log("Microtask inside Macrotask");
      });

      // Завершение макрозадачи
      console.log("End of Macrotask 1");
    }, 0);

    console.log("End");
  }
}
