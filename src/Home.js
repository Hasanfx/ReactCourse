import { useState } from "react";


const Home = () => {
    // let name = 'mario';
    const [name,setName]= useState('mario');
    const [age,setAge]= useState('25');
   
    const handleClick=() => {
        setName('luigi');
        setAge(30);
    }
    const handleClickAgain=(name,e) => {
        console.log('hello ' + name ,e.target)
    }

    return (
        <div className="Home">
            <h1>Home</h1>
            <button onClick={handleClick}>Click </button>
            <br/>
            <p>{name} is {age} years old </p>
            <button onClick={(e) => {handleClickAgain('mario',e)}}>ClickAgain </button>
        </div>
      );
}
 
export default Home;