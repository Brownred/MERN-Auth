import { Link } from "react-router-dom"
import { navLinks } from "../lib/constants"

const Navbar = () => {
  return (
    <nav className="my-5 font-poppins">
        <div className="flex justify-between items-center">
            <Link to="/">
                <img src='/Logo.svg' alt="logo" loading="lazy"/>
            </Link>

            <div className="xl:flex hidden">
                <ul className="flex gap-[50px]">
                    {navLinks.map((link) => (
                        <li key={link.key}><Link to={link.path}>{link.label}</Link></li>
                    ))}
                </ul>
            </div>

            <Link to="/sign-up"><div className='bg-[#F54748] hidden lg:flex py-[10px] justify-center min-h-[24px] min-w-[145px] rounded-full'><span className="font-normal"></span>Sign Up</div></Link>

            <img src="/hambuger.svg" alt="hambuger menu icon" width={36} height={27} className="md:hidden block" />
        </div>
    </nav>
  )
}

export default Navbar