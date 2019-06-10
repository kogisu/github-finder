import React, { Component } from 'react';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';

import './App.css'
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }
  // async componentDidMount() {
  //   const res = await axios.get('https://api.github.com/users');
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   })
  // }

  searchUsers = async (text) => {
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    console.log("res: ", res.data);
    this.setState({
      users: res.data.items,
      loading: false
    })
  }

  clearUsers = () => this.setState({users: [], loading: false});

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={!!this.state.users.length}/>
          <Users loading={loading} users={users}/>
        </div>
      </div>
    );
  }
}

// export default App;
