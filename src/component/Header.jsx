import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-amber-50 p-10">
      <NavLink to={/product/}>Home</NavLink>
    </div>
  );
}

export default Header;
