import { useState, useEffect } from "react";

const Home = () => {
    const [blog, setBlog] = useState([
        {title: 'My new website', body: 'lorem ipsum', author: 'Mario', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum', author: 'Jane', id: 1},
        {title: 'Web dev top tips', body: 'lorem ipsum', author: 'Mario', id: 1},
    ]);
   
    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !==id);
        setBlog(newBlogs);
    };

useEffect(() => {
    fetch('http://localhost:8000/blogs')
    then(res => {
        return res.json();
    })
    then((data) => {
        setBlog(data)
    })
} []);

    return (
        <div className="home">
           <BlogList blogs=(blogs) title='All Blogs' handleDelete={handleDelete} />
        </div> 
    );
}
 
export default Home;