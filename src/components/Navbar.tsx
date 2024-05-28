import { Link } from "react-router-dom"
import { navLinks } from "../lib/constants"

const Navbar = () => {
  return (
    <nav className="my-5">
        <div className="flex justify-between items-center">
            <Link to="/">
                <img src='/Logo.svg' alt="logo" loading="lazy"/>
            </Link>

            <div className="xl:flex hidden">
                <ul className="flex gap-[50px]">
                    {navLinks.map((link) => (
                        <li><Link to={link.path}>{link.label}</Link></li>
                    ))}
                </ul>
            </div>

            <div className='bg-[#F54748] rounded-full'><Link to="/Sign-up">Sign Up</Link></div>
        </div>
    </nav>
  )
}

export default Navbar