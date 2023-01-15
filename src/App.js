
import { useState } from 'react';
import './App.css';

function App() {

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");

  function FnameChange(event){

    var Fnamevalue = event.target.value;

    setFname(Fnamevalue);

  }

  function LnameChange(event){

    var LnameValue = event.target.value;
    
    setLname(LnameValue);

  }

  function login(event){

    if (Fname == "" || Lname == "" ){
      alert("Please enter your credentials!");
    }
    else {
      alert("Hello " + Fname + " " + Lname);

      setLname("");
      setFname("");
      
    }

    event.preventDefault();

  }

  return (
    <div className='LoginSection' >
      <h1>Greet You</h1><br></br>
      <form onSubmit={login} >
      <input value={Fname} type={"text"} placeholder="First Name" onChange={FnameChange}></input><br></br>
      <input value={Lname} type={"text"} placeholder="Last Name" onChange={LnameChange} ></input><br></br>
      <button type={"submit"} >Greet Me</button>
      </form>
    </div>
  );
}

export default App;
