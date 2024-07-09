import Router from "./Router.js";
import Component from "./Component.js";
import State from "./State.js";

const state = new State({ count: 0 });

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    state.subscribe(this.render.bind(this));
  }

  increase() {
    state.setState({ count: state.getState().count + 1 });
  }

  decrease() {
    state.setState({ count: state.getState().count - 1 });
  }

  render() {
    return html`
      <h1>Counter</h1>
      <p>Count: ${state.getState().count}</p>
      <button onclick="counter.decrease()">-</button>
      <button onclick="counter.increase()">+</button>
    `;
  }
}

const counter = new CounterComponent();

const routes = {
  "/": { template: counter.render() },
  "/about": { template: "<h1>About</h1><p>About us page</p>" },
};

const router = new Router(routes);
