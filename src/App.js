import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blog">
      <header className="blog-header">
        <h1>All blogs</h1>
        {blogs &&
          blogs.map((blog) => (
            <div key={blog.id}>
              <h5>{blog.title}</h5>
              <p>{blog.body}</p>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
