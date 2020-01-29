import React, { useEffect, useState } from 'react';
import { Message } from '@pro-ms/api-interfaces';

export const App = () => {
  const [message, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to Pro MS!</h1>
      </div>
      {/* <div>{m.message}</div> */}
    </>
  );
};

export default App;
