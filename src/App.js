import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import './App.css'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }
  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    this.setState({
      users: res.data,
      loading: false
    })
  }
  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Users loading={loading} users={users}/>
      </div>
    );
  }
}

// export default App;
