import React from "react";

export default function QuaterTimer() {
  const [quater, setquater] = React.useState(720000);
  const [shot, setshot] = React.useState(24000);
  const [gameOn, setgameOn] = React.useState(false);
  React.useEffect(() => {
    let interval = null;
    //this is to substract timer value
    if (gameOn) {
      interval = setInterval(() => {
        setquater((prevTime) => prevTime - 10);
        setshot((pre) => pre - 10);
      }, 10); console.log(quater)
      if(quater<24000){
        setshot(0)
      }
     
      else if(shot==1000 && quater>24000){
      setgameOn(false)
      }
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameOn]);
  return (
    <div className="shortClock">
      {/* displaying game clock  */}
      <h1>Game Clock</h1>
      <h1>
        <span>{Math.floor((quater / 60000) % 60)}</span>:
        <span>{("0" + Math.floor((quater / 1000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((quater / 10) % 100)).slice(-2)}</span>
      </h1>
      {/* displaying shot clock */}
      <h1>short Clock</h1>
      {quater>24000&&(<h2>
        <span>{("0" + Math.floor((shot / 1000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((shot / 10) % 100)).slice(-2)}</span>
      </h2>)}
      <h4><button  className="btn btn-outline-warning" onClick={()=>{setquater(720000)}}>quater</button><button   onClick={()=>{setquater(300000)}} className="btn btn-outline-warning">ot</button></h4>
      {!gameOn && quater==720000 &&shot == 24000 &&( <button
        onClick={() => setgameOn(true)}
        className="btn btn-outline-success "
      >
        start
      </button>)}
     {gameOn && ( <button
        onClick={() => setgameOn(false)}
        className="btn btn-outline-danger"
      >
        stop
      </button>)}
     {!gameOn && quater!==720000 &&( <button
        onClick={() => setgameOn(true)}
        className="btn btn-outline-warning"
      >
        resume
      </button>)}
     {!gameOn && quater<720000&&( <button
        onClick={() => {
          setquater(720000);
          setshot(24000);
        }}
        className="btn btn-outline-dark"
      >
        reset
      </button>)}
     {shot<24000 && quater>24000&&( <button onClick={() => setshot(24000)} className="btn btn-outline-dark">
        reset shot clock
      </button>)}
     {shot<14000&& quater>24000&&( <button onClick={() => setshot(14000)} className="btn btn-outline-dark">
        reset 1/2 shot clock
      </button>)}
     
    </div>
  );
}
