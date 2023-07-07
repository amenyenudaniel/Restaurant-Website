import "./Blog.css";
import Chef from "../../components/Chef/Chef";
import BlogPost from "../../components/BlogPost/BlogPost";
const Blog = () => {
  return (
    <div>
      <div className="app__subscribe">
        <div className="subscribe__container">
          <p>Restaurants Reviews</p>
          <h2>
            Join our 100,000 + Subscribers
            <br /> List Today!
          </h2>

          <div className="subscribe__input">
            <input type="text" placeholder="Enter your email address" />
            <button className="custom__button">Subscribe</button>
          </div>
        </div>
      </div>
      <BlogPost />
      <Chef />
    </div>
  );
};

export default Blog;
