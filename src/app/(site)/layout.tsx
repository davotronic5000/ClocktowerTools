import ChangeLog from "@/components/changelog/changelog";
import { Header } from "@/components/header";
import DarkBox from "@/components/simple-styles/dark-box";
import CustomToaster from "@/components/toast/custom-toaster";
import type { Metadata } from "next";
import { Playfair_Display_SC, Raleway } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";
import AriaRouterProvider from "../router-context";
import ChangelogModal from "./change-log";

export const metadata: Metadata = {
    title: {
        default: "Clocktower Tools",
        template: "Clocktower Tools: %s",
    },
    description: "Helpful tools to create assets for Blood on the Clocktower",
};

const raleway = Raleway({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-raleway",
});

const playfairDisplay = Playfair_Display_SC({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair-display",
    weight: "400",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            data-theme="clocktower"
            className={`${raleway.variable} ${playfairDisplay.variable} overflow-hidden`}
        >
            <body className="bg-gray-950">
                <AriaRouterProvider>
                    <CustomToaster />
                    <div className="flex h-screen max-h-screen flex-col justify-between">
                        <Header />
                        <main className="flex grow overflow-auto bg-gray-700">
                            {children}
                        </main>
                        <DarkBox>
                            <footer
                                className={`flex justify-between border-t-2 border-solid border-gray-600 p-2 text-sm`}
                            >
                                <span>
                                    This project is not affiliated with The
                                    Pandemonium Institute. All roles & content
                                    are the property of Steven Medway and The
                                    Pandemonium Institute.
                                </span>
                                <ChangelogModal>
                                    <ChangeLog />
                                </ChangelogModal>
                            </footer>
                        </DarkBox>
                    </div>
                </AriaRouterProvider>
            </body>
        </html>
    );
}
