import { Component } from "react";
import { Header } from "semantic-ui-react";

export default class Home extends Component {
  state = { yo: "here" };
  componentDidMount = () => {
    console.log("mounted");
  };

  componentWillUnmount = () => {
    console.log("unmounted");
  };
  render() {
    return (
      <div>
        <Header>Home</Header>
      </div>
    );
  }
}
