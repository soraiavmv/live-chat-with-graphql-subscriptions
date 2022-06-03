import React, { useState } from 'react';
import './styles.css';

const Welcome = ({ setUsername }) => {
  const [name, setName] = useState('');

  return (
    <div className='welcome-container'>
      <p className='title'>Welcome to the Dull Chat!</p>
      <p className='subtitle'>What should we call you?</p>
      <input
        label='name'
        className='input-box'
        value={name}
        onChange={(event) =>
          setName(event.target.value)
        }
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            setUsername(name);
          }
        }}
      />
    </div>
  );
}

export default Welcome;