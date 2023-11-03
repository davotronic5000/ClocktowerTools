import { Icon } from "@/components/icon";
import Link from "next/link";
import { ComponentType } from "react";
import NavBar from "./nav-bar";

const Header: ComponentType = () => {
    return (
        <header className="flex justify-between p-3 bg-neutral text-neutral-content">
            <Link
                href="/"
                className="small-caps flex items-center font-serif text-3xl font-semibold"
            >
                <Icon type="clocktower" className="text-accent" />
                <h1>Clocktower Guru</h1>
                <Icon type="death-book" className="pl-2 text-accent" />
            </Link>
            <NavBar />
        </header>
    );
};

export default Header;
