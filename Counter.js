import ReactiveComponent from "./ReactiveComponent.js";

class Counter extends ReactiveComponent {
  initState() {
    return { count: 0 };
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  decrease() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    const template = `
      <div>
        <h1>Count: ${this.state.count}</h1>
        <button id="decrease">-</button>
        <button id="increase">+</button>
      </div>
    `;
    const app = document.getElementById("app");
    app.innerHTML = template;

    document.getElementById("decrease").onclick = () => this.decrease();
    document.getElementById("increase").onclick = () => this.increase();
  }
}

export default Counter;
