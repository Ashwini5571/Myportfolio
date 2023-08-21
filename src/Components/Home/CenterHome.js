import { Component } from "react";
import "./home.css";
import background from "../Image/background.jpg";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export class Home1 extends Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", i: 0 };
    
  }
  componentDidMount() {
    this.makeTimer();
  }
  makeTimer() {
    const arr = ["Designer", "Developer", "Learner"];
    setInterval(() => {
      this.setState({ name: arr[this.state.i] });
      if (this.state.i === arr.length - 1) {
        this.setState({
          i: 0,
        });
      } else {
        this.setState({
          i: this.state.i + 1,
        });
      }
    }, 2000);
  }

  render() {
    return (
      <div className="img col-md-12">
        <img src={background} height={"680px"} width={"100%"} />
        <p className="name">
          <b>Ashwini R H</b>
          
        </p>
        <h2 className="name1"> I'm a {this.state.name}</h2>
      </div>
    );
  }
}
