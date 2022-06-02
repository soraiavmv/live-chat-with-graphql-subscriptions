import React from 'react';
import './styles.css';

const Message = ({ message, isSelf }) => {
  const { user, content } = message;

  return (
    <div
      className='container'
      style={{
        justifyContent: isSelf ? 'flex-end' : 'flex-start'
      }}
    >
      {!isSelf && (
        <div className='name-identifier'>
          {user.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div
        className='content'
        style={{
          background: isSelf ? '#6A9FAE' : '#F3E0BD',
          color: isSelf ? 'white' : 'black',
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Message;
