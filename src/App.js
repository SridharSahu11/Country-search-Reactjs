import './App.css';
import { useState } from 'react'
import { useEffect } from 'react'
import Header from "./Components/Header";
import CountryCard from "./Components/CountryCard";

function App() {
  const[cdata,setCdata]=useState();
  const[inputdata,setInputdata]=useState(" ");
  useEffect(()=>{
      (async()=>{
        try{
          const data= await fetch('https://restcountries.com/v2/all');
          const res= await data.json();
          const countries=res.slice(0,200);
          console.log(countries);
          setCdata(countries);
        }catch(err){
          console.log(err);
        }
      })()
  },[])
  return (
    <div className="App">
           <Header/>
         {/* Input Feild */}
         <div className='input_container'>
            <div className="input-wrapper">
                <input type="text" id="user" placeholder='Search for...' value={inputdata} onChange={(e)=>{setInputdata(e.target.value)}} required />
            </div>
        </div>
        {/* Api data iteration */}
         <div className='country-container'>
        {
          cdata&&cdata.filter((user)=>user.name.toLowerCase().includes(inputdata)).map((country)=>{
            return <CountryCard key={country.idgit} country={country}/>
          })
        }
        </div>
    </div>
  );
}

export default App;
