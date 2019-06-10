import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  }
  onSubmit = e => {
    // console.log("submitting");
    e.preventDefault();
    this.props.searchUsers(this.state.text); 

  }
  onChange = e => this.setState({[e.target.name]: e.target.value});
  
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search Users..." onChange={this.onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {
          this.props.showClear && (
            <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
          )
        }
      </div>
    )
  } 
}
export default Search
