import { Link } from "react-router-dom"
import { footerLinks } from "../lib/constants"

const AuthFooter = () => {
  return (
    <div className="w-screen bg-white py-3 px-16 flex justify-between">
        {footerLinks.map((link) => (
            <Link to={link.path} className="text-gray-600 text-xs">{link.label}</Link>
        ))}
    </div>
  )
}

export default AuthFooter