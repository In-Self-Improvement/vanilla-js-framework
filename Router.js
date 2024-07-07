class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    window.addEventListener("hashchange", () => this.handleRouteChange());
    window.addEventListener("load", () => this.handleRouteChange());
  }

  handleRouteChange() {
    const path = window.location.hash.substring(1) || "/";
    const route = this.routes[path];
    if (route) {
      document.getElementById("app").innerHTML = route.template;
    } else {
      document.getElementById("app").innerHTML = "<h1>404 - Not Found</h1>";
    }
  }
}

export default Router;
