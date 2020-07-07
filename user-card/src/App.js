import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    return (
      <div className="App">
        <UserCard 
          users={this.state.users} 
          followers={this.state.followers} 
        />
      </div>
    );
  }
}

export default App;
