import { NavLink } from "react-router-dom";
import './header.css'
import logo from './Logo.png'

const Header = () => {
    return (
        
        <div className="navbar bg-[#FFFFFFF2]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                     {/* nav link for mobile */}
                    <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/donation" className="nav-link">Donation</NavLink>
                            <NavLink to="/statistic" className="nav-link">Statistics</NavLink>
                        </ul>
                    </nav>
                </div>
                 {/* logo for pc */}
                <div className='hidden lg:flex'>
                    <img src={logo} alt="Logo" />
                </div>
            </div>
             {/* logo for pc */}
            <div className='flex lg:hidden'>
                <img src={logo} alt="Logo" />
            </div>

            <div className="navbar-end hidden lg:flex">
                 {/* nav link for pc */}
                <nav className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <div className="flex gap-5 items-center" >
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/donation" className="nav-link" >Donation</NavLink>
                        <NavLink to="/statistic" className="nav-link">Statistics</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;