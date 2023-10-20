import { Icon } from "@/components/icon";
import Link from "next/link";
import { ComponentType } from "react";

const Header: ComponentType = () => {
    return (
        <div className="navbar bg-neutral">
            <Icon type="clocktower" className="text-accent" />
            <h1>
                <Link className="small-caps font-serif text-3xl font-semibold">
                    Clocktower Guru
                </Link>
            </h1>
            <Icon type="death-book" className="pl-2 text-accent" />
        </div>
    );
};

export default Header;
