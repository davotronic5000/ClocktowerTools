import { Playfair_Display_SC, Raleway } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

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
            className={`${raleway.variable} ${playfairDisplay.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
