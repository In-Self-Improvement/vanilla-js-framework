import Router from "./Router.js";
import Component from "./Component.js";

class HomeComponent extends Component {
  render() {
    return `<h1>Home</h1><p>Welcome, ${this.props.name}!</p>`;
  }
}

const routes = {
  "/": { template: new HomeComponent({ name: "User" }).render() },
  "/about": { template: "<h1>About</h1><p>About us page</p>" },
};

const router = new Router(routes);
