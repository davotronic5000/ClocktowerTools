import { ComponentType } from "react";
import NavBarLink from "./nav-bar-link";

const NavBar: ComponentType = () => {
    return (
        <ul className="navbar-end divide-x-2 px-4 text-sm">
            <NavBarLink path="/script">Script Tool</NavBarLink>
            <NavBarLink path="/token">Token Generator</NavBarLink>
        </ul>
    );
};

export default NavBar;
