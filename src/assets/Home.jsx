import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() =>{
        setBlogs(data);
        setIsPending(false);
        },3000);
       
      })
      .catch((error) => {
        console.error("Failed to load blogs:", error);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">

      {isPending && <div>Loading....</div>}

      {blogs && <Bloglist blogs={blogs} title="All Blogs" />}

    </div>
  );
};

export default Home;