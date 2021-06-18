import { useState } from "react";
import BlogsList from './BlogsList.js';

const Home = () => {

  
  const [blogs,setBlogs]=useState([
  {title:'new blog',author:'fehmi',content:'Cupidatat ipsum nulla magna laboris tempor occaecat. Lorem et quis veniam magna ullamco elit. Ex nisi ea reprehenderit culpa veniam voluptate dolore.',id:1},
  {title:'pool party',author:'inferno',content:'Laboris velit esse minim qui voluptate nulla exercitation nostrud id culpa reprehenderit cillum. Eu velit non tempor voluptate nostrud aliquip veniam commodo. Et cillum culpa irure aliqua consequat ut. Nulla esse eu enim ipsum magna. Reprehenderit pariatur enim nostrud et incididunt ipsum ex sint sint.',id:2},
  {title:'web dev ideas',author:'fehmi',content:'Officia amet aute reprehenderit cillum fugiat amet tempor elit ad. Excepteur ullamco ex id irure reprehenderit qui incididunt voluptate fugiat laboris ea voluptate. Aliqua eiusmod est pariatur pariatur consectetur fugiat consequat nisi adipisicing consectetur dolor cupidatat elit. Culpa aliquip voluptate est et quis. Amet incididunt culpa nostrud nulla in dolor magna ipsum consectetur mollit.',id:3}
  ]);
const handleDelete =(id)=>{

  const newBlogs=blogs.filter(blog=>blog.id !== id);
  setBlogs(newBlogs);
}

    return (
        <div className="home_container">
        <h1>Home Page</h1>
   

        <BlogsList blogs={blogs} title='All blogs' handleDelete={handleDelete} />
        <BlogsList blogs={blogs.filter(blog=>blog.author=='fehmi')} title="Fehmi's blogs" handleDelete={handleDelete} />
        </div>
      );
}
 
export default Home;
