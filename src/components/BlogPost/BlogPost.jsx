import "./BlogPost.css";
import { blogPost } from "../../constants/data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BlogPost = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="blogpost">
      <h1
        className="headtext__cormorant"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        LATEST BLOG POSTS
      </h1>
      <div className="blogpost__container">
        {blogPost.map((blog) => (
          <Link to={`/BlogPage/${blog.id}`} key={blog.id}>
            <div className="blogpost__card" data-aos="fade-up">
              <img src={blog.image} alt="blog__image" loading="lazy" />
              <p>{blog.title}</p>
              <small>{blog.desc}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
