
import { useState } from 'react'; 
const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const [isPending,setIsPending]=useState(false)

    const handleSubmit= (e)=>
    {
        e.preventDefault()
        const blog={title,body,author}
        setIsPending(true)
        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then( () => {
             setIsPending(false)
            console.log("blog added")
        })
    }

    return (  
        <div className="create">
            <h2> Create a new post </h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text"
                 name="title" 
                 placeholder="Enter title"
                  required 
                  value={title}
                  onChange={ (e) => setTitle( e.target.value ) }
                  />
                <label >Content:</label>
                <textarea 
                required  
                value={body}
                onChange={ (e) => setBody( e.target.value ) }

                ></textarea>
                <label>Author:</label>
                <select 
                value={author}
                onChange={ (e) => setAuthor( e.target.value ) }
                >
                    <option value="mario">mario </option>
                    <option value="yoshi">yoshi </option>
                </select>
                {!isPending && <button>Add Blog</button> }
                {isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;