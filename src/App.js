import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      message: "wait! Its Loading",
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  getUsers() {
    this.setState({
      loading: true,
    });
    axios("https://api.randomuser.me/?nat=US&results=10").then((resp) =>
      this.setState({
        users: [...this.state.users, ...resp.data.results],
        loading: false,
      })
    );
  }
  componentWillMount() {
    this.getUsers();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.getUsers();
  };
  render() {
    const { loading, users, message } = this.state;
    return (
      <div className="App">
        {!loading ? (
          users.map((user) => (
            <div className="app-container" key={user.id.value}>
              <h1 style={{ color: "red" }}>
                {user.name.first + " " + user.name.last}
              </h1>
              <h3>{user.email}</h3>
              <hr></hr>
              <form onSubmit={this.handleSubmit}>
                <input type="submit" value="more data" />
              </form>
            </div>
          ))
        ) : (
          <Loading message={message} second={loading} />
        )}
      </div>
    );
  }
}
