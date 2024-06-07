"use client";
import { Icon } from "@/components/icon";
import Link from "next/link";
import { ComponentType, useState } from "react";
import { ToggleButton } from "react-aria-components";
import DarkBox from "../simple-styles/dark-box";
import { Heading } from "../typography";
import NavBar from "./nav-bar";

const Header: ComponentType = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <DarkBox className="z-10">
            <header
                className={`flex flex-col border-b-2 border-solid border-gray-600 shadow-xl shadow-gray-900/50`}
            >
                <div className="flex flex-wrap justify-between p-2">
                    <Link
                        href="/"
                        className="flex items-center justify-between font-serif text-3xl font-semibold small-caps"
                    >
                        <Icon type="clocktower" className="text-amber-500" />
                        <Heading as="h1" className="sm:px-2">
                            Clocktower Guru
                        </Heading>
                        <Icon
                            type="death-book"
                            className="pl-2 text-amber-500"
                        />
                    </Link>
                    <ToggleButton
                        isSelected={navOpen}
                        onChange={setNavOpen}
                        className="md:hidden"
                    >
                        <Icon
                            type={navOpen ? "x-mark" : "bars-3"}
                            className="text-white"
                            size="sm"
                        />
                    </ToggleButton>
                    <NavBar className="hidden basis-full md:flex lg:basis-auto" />
                </div>
                {navOpen && <NavBar className="md:hidden" />}
            </header>
        </DarkBox>
    );
};

export default Header;
