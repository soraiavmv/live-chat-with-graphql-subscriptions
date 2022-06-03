import React, { useState } from 'react';

const Welcome = ({ setUsername }) => {
  const [name, setName] = useState('');

  return (
    <div>
      <p>Welcome to the Dull Chat! What should we call you?</p>
      <input
        label="name"
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