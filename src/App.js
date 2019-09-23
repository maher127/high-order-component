import React, { Component } from "react";
import MovieApp from "./components/MovieApp";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 5000);
  };
  render() {
    return (
      <div className="App">
        <MovieApp isLoading={this.state.loading} />
      </div>
    );
  }
}

export default App;
