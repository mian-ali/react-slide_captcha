import './App.css';
import React, { useState } from 'react';
import { Vertify } from '@alex_xu/react-slider-vertify';

function App() {
  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true);
  };
  const hide = () => {
    setVisible(false);
  };
  const style = {
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px',
    width: '100px',
    padding: '5px 20px',
    color: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    background: '#1991FA',
  };
  return (
    <div className="App">
      <div onClick={show} style={style}>
        Show
      </div>
      <div onClick={hide} style={style}>
        Hide
      </div>
      <Vertify
        width={320}
        height={160}
        visible={visible}
        onSuccess={() => alert('success')}
        onFail={() => alert('fail')}
        onRefresh={() => alert('refresh')}
      />
    </div>
  );
}

export default App;
