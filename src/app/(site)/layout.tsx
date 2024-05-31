import { Header } from "@/components/header";
import DarkBox from "@/components/simple-styles/dark-box";
import CustomToaster from "@/components/toast/custom-toaster";
import type { Metadata } from "next";
import { Playfair_Display_SC, Raleway } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../package.json";
import "../globals.css";
import AriaRouterProvider from "../router-context";

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
            <body>
                <AriaRouterProvider>
                    <CustomToaster />
                    <div className="flex h-screen max-h-screen flex-col justify-between">
                        <Header />
                        <main className="flex grow overflow-auto bg-gray-700">
                            {children}
                        </main>
                        <DarkBox>
                            <footer
                                className={`border-t-2 border-solid border-gray-600 p-2 text-sm `}
                            >
                                This project is not affiliated with The
                                Pandemonium Institute. All roles & content are
                                the property of Steven Medway and The
                                Pandemonium Institute.
                                <span className="float-right">
                                    {config.version}
                                </span>
                            </footer>
                        </DarkBox>
                    </div>
                </AriaRouterProvider>
            </body>
        </html>
    );
}
