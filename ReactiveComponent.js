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
    // 이 메서드는 서브클래스에서 구현해야 합니다.
    return "";
  }
}

export default ReactiveComponent;
