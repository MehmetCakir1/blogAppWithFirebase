import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteBlog, increaseLike } from "../helpers/firebase";
import { BlogContext } from "../contexts/BlogContext";
import { AiFillHeart } from "react-icons/ai";


const SingleBlog = ({ item }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { editBlog,blog} = useContext(BlogContext);
  // console.log(currentUser.email);
  const { title, url, content, userName, id,date} = item;
  return (
    <div className=" col-lg-4 col-md-6 single rounded-3">
      <div className="bg-light p-2">
        <div className="img-div">
          <img src={url} alt={title} />
        </div>
        <h1 className="text-dark header text-center text-capitalize title">
          {title.length > 10 ? title.slice(0, 8) + "..." : title}
        </h1>
        <p className="text-dark fs-4">
          {date}
        </p>
        <p className="text-dark ">{content.slice(0, 80)}...</p>
        <h5 className="text-dark">@{userName}</h5>
        <div className="btnDiv ">
          <button
            onClick={() =>
              navigate("/details", { state: item, replace: false })
            }
            className="bg-primary border-0 text-light rounded-3 p-1"
          >
            DETAILS
          </button>
          {currentUser.displayName == userName && (
            <>
              <button onClick={() => deleteBlog(id)}>REMOVE</button>
              <button
                onClick={() => {
                  editBlog(item);
                  navigate("/updateblog");
                }}
              >
                EDIT
              </button>
            </>
          )}
        </div>
        <div>
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => increaseLike(item)}
          >
            <AiFillHeart />
          </span>
          <span className="text-dark"> {item.like}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
