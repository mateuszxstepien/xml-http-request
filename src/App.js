import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhr.onload = () => {
      console.log(xhr.status);
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        console.log(typeof users);
        this.setState({
          users,
        });
      }
      console.log(typeof xhr.response);
    };
    // xhr.addEventListener("load", () => {
    //   console.log(xhr.status);
    //   if (xhr.status === 200) {
    //     const users = JSON.parse(xhr.response);
    //     console.log(typeof users);
    //     this.setState({
    //       users,
    //     });
    //   }
    //   console.log(typeof xhr.response);
    // });
    xhr.send(null);
  }

  render() {
    return (
      <>
        {this.state.users.map((user) => (
          <div key={user.id}>
            {user.name} : {user.email}
          </div>
        ))}
      </>
    );
  }
}

export default App;
