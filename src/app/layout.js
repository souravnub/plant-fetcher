import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Plant fetcher",
    description: "An information platform for fetching details for plants",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "mt-20 min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}>
                <ThemeProvider attribute="class">
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
