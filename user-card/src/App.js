import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchUser:"laurenemick",
      users: [],
      followers:[]
    }
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/laurenemick')
      .then(res => {
        // console.log(res.data)
        this.setState({
          users: res.data
      });
    });
    axios
      .get('https://api.github.com/users/laurenemick/followers')
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: res.data
        });
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.users !== prevState.users) {
      if (this.state.searchUser === "") {
        axios.get('https://api.github.com/users/laurenemick')
          .then(res => {
          this.setState({
            users: res.data,
            searchUser: "laurenemick" // to avoid infinite loop
          });
        });
      }
    }
  }

  handleChanges = e => {
    this.setState({
      searchUser: e.target.value
    });
  };

  fetchUser = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.searchUser}`)
      .then(res => {
        this.setState({
          users: res.data
        });
      });
    axios
      .get(`https://api.github.com/users/${this.state.searchUser}/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          followers: res.data
        });
      });
  };

  render() {
    if (this.state.user.length === 0) {
      return <p>Loading user...</p>;
    }
    return (
      <div className="App">
        <div>
          <input
            type="text"
            placeholder="Search for user..."
            value={this.state.searchUser}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchUser}>Search</button>
        </div>
        <div>
          <UserCard 
            users={this.state.users} 
            followers={this.state.followers} 
          />
        </div>
      </div>
    );
  }
}

export default App;
