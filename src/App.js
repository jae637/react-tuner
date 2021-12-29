import React,{useState,useEffect } from 'react';
import { ReactMediaRecorder } from "react-media-recorder";
import { useReactMediaRecorder } from "react-media-recorder";

function App() {
  const [frequency,setFrequency] = useState('');

  const audioRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  useEffect(()=>{
    // navigator.mediaDevices.getUserMedia({audio:true}).then((stream)=>{
    //   stream.getTracks()[0].enabled=true
    //   // setTrack(stream.getTracks()[0]);
    //   console.log(stream.getTracks()[0].readyState)
    //   console.log(stream.getTracks()[0])
    // })

    // navigator.mediaDevices.getUserMedia({audio:true}).then((stream)=>{
    //   console.log(new MediaRecorder(stream))
    //   setTrack()
    // })

    navigator.mediaDevices.getUserMedia({audio:true}).then((stream)=>{
      // stream.getTracks()[0].enabled=true
      let audioCtx = new window.AudioContext();
      let analyser = audioCtx.createAnalyser();
      let gainNode = audioCtx.createGain();

      let source = audioCtx.createMediaStreamSource(stream);
      let getFrequency = audioCtx.createScriptProcessor
      source.connect(analyser);
      source.connect(gainNode);
      source.connect(audioCtx.destination)

      console.log(audioCtx.destination)

      console.log(canvasRef.current.captureStream())


      // canvasRef.current.captureStream(stream);
      audioRef.current.srcObject=stream;
    })
  },[])


  return (
    <>
      {/* <canvas ref={canvasRef} height={200} width={200}/> */}
      <audio ref={audioRef} autoPlay />
    </>
  );
};

export default App;
