import React from 'react';


function H2(props) {
  React.useEffect(()=>{
    console.log(props.text)
  },[props.text])
  return (
    <>
      <h2>{props.text}</h2>
      <button onClick={()=>{console.log(props.text)}}>H2 Button</button>
    </>
  );
}

export default H2;
