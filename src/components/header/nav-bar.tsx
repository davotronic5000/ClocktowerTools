import NavBarLink from "./nav-bar-link";

interface NavBarProps {
    className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
    return (
        <nav
            className={`flex flex-col items-center justify-center divide-y-2 divide-gray-600 px-4 text-sm md:flex-row md:divide-x-2 md:divide-y-0 md:divide-white md:py-2 lg:mr-8 ${className}`}
        >
            <NavBarLink path="/script">Script Tool</NavBarLink>
            <NavBarLink path="/token">Token Generator</NavBarLink>
            <NavBarLink path="/roles">Role Info</NavBarLink>
            <NavBarLink path="/jinx">Jinx List</NavBarLink>
        </nav>
    );
};

export default NavBar;
