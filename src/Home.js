// import { useState,useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs,isPending,error}= useFetch('http://localhost:8000/blogs')


    return (
        <div className="home">
            {error && <div> {error} </div>}
        {isPending && <div>Loading...</div>}
        {blogs &&  <BlogList blogs={blogs} title="All Blogs"/>}


        </div>
    );

        // <div className="Home">
        //   <h1>Home</h1>
//          {/* <button onClick={handleClick}>Click </button> */}
//          {/* <br/> */}
//          {/* <p>{name} is {age} years old </p> */}
//          {/* <button onClick={(e) => {handleClickAgain('mario',e)}}>ClickAgain </button> */}
//          </div>
    // // let name = 'mario';
    // const [name,setName]= useState('mario');
    // const [age,setAge]= useState('25');
   
    // const handleClick=() => {
    //     setName('luigi');
    //     setAge(30);
    // }
    // const handleClickAgain=(name,e) => {
    //     console.log('hello ' + name ,e.target)
    // }

     
}
 
export default Home;