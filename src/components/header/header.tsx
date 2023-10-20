import { Icon } from "@/components/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentType } from "react";
import NavBar from "./nav-bar";

const Header: ComponentType = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content">
            <div>
                <Link
                    href="/"
                    className="small-caps flex items-center font-serif text-3xl font-semibold"
                >
                    <Icon type="clocktower" className="text-accent" />
                    <h1>Clocktower Guru</h1>
                    <Icon type="death-book" className="pl-2 text-accent" />
                </Link>
            </div>
            <NavBar />
        </div>
    );
};

export default Header;
