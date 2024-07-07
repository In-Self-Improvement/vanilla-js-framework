class Component {
  constructor(props = {}) {
    this.props = props;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    return "";
  }
}

export default Component;
