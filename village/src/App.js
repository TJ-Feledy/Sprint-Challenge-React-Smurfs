import React, { Component } from 'react';
import axios from 'axios'
import {Route,Link,NavLink} from 'react-router-dom'

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  updateSmurfs = (smurfs) => {
    this.setState({smurfs})
  }

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(err => {
        console.log('Error:', err)
      })
  }
  

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Welcome!</h1>
          <NavLink className='navLink' exact to='/' activeClassName='clicked'>Smurf List</NavLink>
          <NavLink className='navLink' exact to='/smurf-form' activeClassName='clicked'>Add to Smurf List</NavLink>
        </nav>

        <Route path='/smurf-form' render={props => <SmurfForm {...props} updateSmurfs={this.updateSmurfs} />} />
        <Route path='/' exact render={props => <Smurfs {...props} smurfs={this.state.smurfs} updateSmurfs={this.updateSmurfs} />} />

      </div>
    );
  }
}

export default App;
