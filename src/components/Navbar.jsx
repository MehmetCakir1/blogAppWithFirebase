import {Link} from "react-router-dom"
import { FaUserCircle } from "react-icons/fa";
import Modal  from "./Modal";

const Navbar = () => {
  return (
    <nav className="navbar d-flex justify-content-between bg-primary px-3">
        <div>
            <Link to="/"  className="text-light">LOGO</Link>
        </div>
        <div className="btnDiv me-2 text-center">
          <button className="border-0 fs-3 bg-transparent p-2">
          <FaUserCircle className="text-danger bg-light rounded-circle"/>
        </button>
        <Modal/>
        </div>
        
    </nav>
  );
};

export default Navbar;
