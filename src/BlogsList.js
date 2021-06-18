const BlogsList = ({blogs,title,handleDelete}) => {
    return ( 
<div className="blogsList">
      <h2>{title}</h2>  
      {blogs.map((blog)=>(
     <div className="blogPreview" key={blog.id}> 
     <h4>{blog.title}</h4>
      <p>{blog.content}</p>
      <button onClick={()=>handleDelete(blog.id)}>Delete</button>
      </div>    )    )

      }
      </div>
     );
}
 
export default BlogsList;