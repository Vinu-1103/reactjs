//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Classcom from "./components/classtype";
import Functionalcom from "./components/functiontype";

class App extends React.Component{
  render(){
  return (
    <div>
     <Classcom/>
     <Functionalcom/>
    </div>
  );}
}

export default App;
