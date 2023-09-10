import logo from "../asset/icons/profile.png"
import facbook from "../asset/icons/facebook.png";
import github from "../asset/icons/github.png";
import instagram from "../asset/icons/instagram.png"

const Navbar =() =>{
    return(
        <div className="flex justify-between items-center">
            <div className="px-3 pt-3">
                <img src={logo} alt="logo" width={60} className="cursor-pointer" />
            </div>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facbook} alt="facbook" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.github.com/" target="_blank">
                        <img src={github} alt="github" width={40} />
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={instagram} alt="instagram" width={40} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;