const BlogList = ({blogs,title,handleDelete}) => {
    // const blogs= props.blogs;
    // const title= props.title;
    console.log(blogs);
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>

    {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                </div>
            ))}

        </div>
     );
}
 
export default BlogList;