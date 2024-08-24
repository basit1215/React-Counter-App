import { useState } from "react";

function App() {

  let [num, setNum] = useState(0);

  function addDurood() {
    setNum(num + 1);
    console.log(num);
  }

  function removeDurood() {

    if (num === 0) {
      alert("Already Durood Sharif is 0");
    }
    else {
      setNum(num - 1);
    }

    console.log(num);
  }

  function ResetBtn() {

    if (num === 0) {
      alert("Already Durood Sharif is 0");
    }
    else {
      setNum(0);
    }

    console.log(num);

  }

  return (
    <>
      <div className="card  ">
        <div className="card-body ">
          <h1 className="card-title  text-center">Durood Sharif Counter</h1>
          <div className="counter"><h2 className="card-Num text-center">{num}</h2></div>
          <div className="btn-container">
            <div className="buttons">
              <button className="btn btn-primary add" onClick={addDurood}>Add Durood<br />Sharif</button> <br />
              <p className="card-text">* If you have recited Durood Sharif, then click this button to add it.</p>
            </div>
            <div className="buttons">
              <button className="btn btn-primary remove" onClick={removeDurood}>Remove</button><br />
              <p className="card-text"> * If you accidentally clicked and didn’t recite Durood Sharif, then click this button to remove it.</p>
            </div>
          </div>
          <div className="reset-Btn">
            <button className="btn btn-primary reset" onClick={ResetBtn}>Reset</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App