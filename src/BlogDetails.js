import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const {data: blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id)
    const history=useHistory()
   
    const handleClick= () => {
        fetch('http://localhost:8000/blog/'+blog.id,{
            method:'DELETE'
        }).then( ()=>{
                history.push('/')
        })


    }

    return ( 
        <div className="BlogDetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <br/>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )
            }
        </div>
     );
}
 
export default BlogDetails;