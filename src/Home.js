const handleClick=(name)=>{
  console.log('hello '+ name);
}

const Home = () => {
    return (
        <div className="home_container">
        <h1>Home Page</h1>
        <button onClick={()=>{handleClick('fehmi')}}>Login</button>
        </div>
      );
}
 
export default Home;
