import {Link} from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import Modal  from "./Modal";
import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
 const {show,setShow}=useContext(AuthContext)

  useEffect(() => {
    const timeout=setTimeout(()=>setShow(false),4000)

    return () => clearTimeout(timeout)
  }, [show])
  
  return (
    <nav className="navbar d-flex justify-content-between bg-primary px-3">
        <div>
            <Link to="/"  className="text-light">LOGO</Link>
        </div>
        <div className="btnDiv me-2 text-center">
          <button className="border-0 fs-3 bg-transparent p-2" >
          <FaUserCircle className="text-danger bg-light rounded-circle" onClick={()=>setShow(!show)}/>
        </button>
        {
          show && 
          <Modal />
        }
        </div>
        
    </nav>
  );
};

export default Navbar;
