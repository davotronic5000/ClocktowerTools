import { ComponentType } from "react";
import NavBarLink from "./nav-bar-link";

const NavBar: ComponentType = () => {
    return (
        <nav className="divide-x-2 px-4 text-sm items-center flex mr-8">
            <NavBarLink path="/script">Script Tool</NavBarLink>
            <NavBarLink path="/token">Token Generator</NavBarLink>
        </nav>
    );
};

export default NavBar;
