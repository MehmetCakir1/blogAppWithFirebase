import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom"

const SingleBlog = ({ item }) => {
  console.log(item);
  const navigate= useNavigate()
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.email);
  const { title, url, content } = item;
  return (
    <div className=" col-lg-4 col-md-6 single rounded-3">
      <div className="bg-light p-2">
        <div className="img-div">
          <img src={url} alt={title} />
        </div>
        <h1 className="text-dark header text-center text-capitalize">{title}</h1>
        <p className="text-dark fs-4">
          {new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear()}
        </p>
        <p className="text-dark ">{content.slice(0, 80)}...</p>
        <h5 className="text-dark">@{currentUser.displayName}</h5>
        <div className="btnDiv">
          <button onClick={()=>navigate("/details",{state:item,replace:false})} className="bg-primary border-0 text-light rounded-3 p-1">DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;