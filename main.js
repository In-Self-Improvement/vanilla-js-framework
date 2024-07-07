import Router from "./Router.js";

const routes = {
  "/": { template: "<h1>Home</h1><p>Welcome to the Home Page</p>" },
  "/about": { template: "<h1>About</h1><p>About us page</p>" },
};

const router = new Router(routes);
