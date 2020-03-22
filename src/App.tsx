import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  withRouter,
  RouteComponentProps
} from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

interface IProps extends RouteComponentProps<{}> {}

class Home extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.handleToAbout = this.handleToAbout.bind(this);
  }

  handleToAbout() {
    this.props.history.push("/about");
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <input type="button" value="about" onClick={this.handleToAbout}></input>
      </div>
    );
  }
}
class About extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.handleToHome = this.handleToHome.bind(this);
  }
  handleToHome() {
    this.props.history.push("/");
  }
  render() {
    const ChildWithRouter = withRouter(Child);
    return (
      <div>
        <h2>About</h2>
        <input type="button" value="home" onClick={this.handleToHome}></input>
        <ChildWithRouter />
      </div>
    );
  }
}

class Child extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.handleToHome = this.handleToHome.bind(this);
  }
  handleToHome() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h2>Child</h2>
        <input type="button" value="home" onClick={this.handleToHome}></input>
      </div>
    );
  }
}

export default App;
