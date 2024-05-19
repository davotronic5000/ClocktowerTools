import { ComponentType } from "react";
import NavBarLink from "./nav-bar-link";

const NavBar: ComponentType = () => {
    return (
        <nav className="mr-8 flex items-center divide-x-2 px-4 text-sm">
            <NavBarLink path="/script">Script Tool</NavBarLink>
            <NavBarLink path="/token">Token Generator</NavBarLink>
            <NavBarLink path="/jinx">Jinx List</NavBarLink>
        </nav>
    );
};

export default NavBar;
