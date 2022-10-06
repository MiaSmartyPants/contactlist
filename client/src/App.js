
import './App.css';
import {useState, useEffect} from 'react';
import { all } from 'express/lib/application';
// import AllContacts from './components/AllContacts';

function App() {
  const [allData, setAllData] = useState();
    
   async function getData() {
      await fetch("http://localhost:5050/users")
      
      //return the response
        .then((response) => response)
        .then((data) => {
          return data.json();
        })
        .then((data)=> {
          console.log("data", data)
          setAllData(data)
          
    
        })
     } 
     useEffect(() => {
    	// CALL here
    	 getData() 
     
       },[])
    return (
      <div>
    {/* {!!allData &&
    <AllContacts allData={allData} />} */}
      
     
      </div>
    );
  }

export default App;
