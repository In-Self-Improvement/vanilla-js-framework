class ReactiveComponent {
  constructor(props = {}) {
    this.props = props;
    this.state = this.initState();
    this.render();
  }

  initState() {
    return {};
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    return "";
  }
}

export default ReactiveComponent;
