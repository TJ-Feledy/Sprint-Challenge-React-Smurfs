import React from 'react';
import {Link} from 'react-router-dom'

const Smurf = props => {
  const smurf = props.smurfs.find(s => `${s.id}` === props.match.params.id)

  if (!smurf) {
    return <div>'Loading...'</div>
  }

  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <nav className='smurfNav' id='smurfNav'>
        <Link to='/smurf-form'>Add a Smurf</Link>
      </nav>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

