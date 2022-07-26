
import './App.css';
import {useState} from 'react';
import data from './data';



function App() {

const [searchTerm,setSearchTerm] =useState("");


  return (

    <div className="App">
      <h1>Filter Search Application</h1>
      <input type="text"   onChange={(e) => {setSearchTerm(e.target.value)}}/> 
      {data.filter((person)=>{
        if(searchTerm === ""){
          return person;
        } else if(person.username.toLowerCase().includes(searchTerm.toLowerCase())){
          return person;
        }
      }).map((person,index)=>{
        return (
        <p style={{fontSize:"25px"}} key={index}>{person.username}</p>
        )
      })}
    </div>
  );
}

export default App;
