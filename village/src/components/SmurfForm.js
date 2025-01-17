import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    const { name, age, height } = this.state
    const payload = {name, age, height}

    Axios.post('http://localhost:3333/smurfs', payload)
      .then(response => {
        this.props.updateSmurfs(response.data)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('Error:', err)
      })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <div className='formButtons'>
            <button type="submit">Add to the village</button>
            <nav id='smurfNav'>
              <Link to='/'>Smurfs</Link>
            </nav>
          </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
