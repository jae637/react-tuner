import React from 'react';

import H2 from './H2';

function App() {
  let text = "Hello World"
  const [stateText,setStateText] = React.useState("Hello World");
 
  function action(){
  }
  return (
    <>
      <h2>{text}</h2>
      <h2>{stateText}</h2>
      <button onClick={action}>Button</button>
    </>
  );
}

export default App;
