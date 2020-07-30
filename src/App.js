import React, { Component } from "react";
import axios from "axios";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
    };
  }
  getUsers() {
    this.setState({
      loading: true,
    });
    axios("https://api.randomuser.me/?nat=US&results=10").then((resp) =>
      this.setState({
        users: resp.data.results,
        loading: false,
      })
    );
  }
  componentWillMount() {
    this.getUsers();
  }
  render() {
    return (
      <div>
        {!this.state.loading
          ? this.state.users.map((user) => (
              <div> {user.name.first + " " + user.name.last}</div>
            ))
          : "Its Loading"}
      </div>
    );
  }
}
