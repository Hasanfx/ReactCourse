import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {


    const [blogs,setBlogs]=useState ([
        {
            id:'1',
            title:'my new website',
            body:'lorem Ipsum...',
            author:'mario'
        },
        {
            id:'2',
            title:'my new website',
            body:'lorem Ipsum...',
            author:'luigi'
        },   
        {
            id:'3',
            title:'my new website',
            body:'lorem Ipsum...',
            author:'yoshi'
        }
    ]);

    const handleDelete = (id) => {
        const newBlogs= blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
       
     }
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

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        


        </div>
    );

        // <div className="Home">
        //   <h1>Home</h1>
//          {/* <button onClick={handleClick}>Click </button> */}
//          {/* <br/> */}
//          {/* <p>{name} is {age} years old </p> */}
//          {/* <button onClick={(e) => {handleClickAgain('mario',e)}}>ClickAgain </button> */}
//          </div>
     
}
 
export default Home;