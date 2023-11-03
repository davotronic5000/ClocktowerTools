import { Icon } from "@/components/icon";
import Link from "next/link";
import { ComponentType } from "react";
import DarkBox from "../simple-styles/dark-box";
import NavBar from "./nav-bar";

const Header: ComponentType = () => {
    return (
        <DarkBox className="z-10">
            <header
                className={`flex justify-between p-3 border-b-2 border-gray-700 border-solid shadow-xl shadow-gray-900/50`}
            >
                <Link
                    href="/"
                    className="small-caps flex items-center font-serif text-3xl font-semibold"
                >
                    <Icon type="clocktower" className="text-amber-500" />
                    <h1>Clocktower Guru</h1>
                    <Icon type="death-book" className="pl-2 text-amber-500" />
                </Link>
                <NavBar />
            </header>
        </DarkBox>
    );
};

export default Header;
