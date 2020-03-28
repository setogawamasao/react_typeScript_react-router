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
interface IState {
  value: string;
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.handleToAbout = this.handleToAbout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleToAbout() {
    this.props.history.push({
      pathname: "/about",
      state: { value: this.state.value }
    });
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>
          <input type="text" onChange={this.handleChange}></input>
        </div>
        <input type="button" value="about" onClick={this.handleToAbout}></input>
      </div>
    );
  }
}
class About extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: (this.props.location.state as IState).value };
    this.handleToHome = this.handleToHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleToHome() {
    this.props.history.push("/");
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }

  render() {
    const ChildWithRouter = withRouter(Child);
    return (
      <div>
        <h2>About</h2>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </div>
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
    this.handleChange = this.handleChange.bind(this);
  }
  handleToHome() {
    this.props.history.push("/");
  }

  handleChange(event: any) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <h2>Child</h2>
        <div>
          <input
            type="text"
            value={(this.props.location.state as IState).value}
            onChange={this.handleChange}
          ></input>
        </div>
        <input type="button" value="home" onClick={this.handleToHome}></input>
      </div>
    );
  }
}

export default App;
