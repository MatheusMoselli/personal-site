import { Righteous } from "next/font/google"
import { HeaderNav } from "./HeaderNav"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const righteous = Righteous({ weight: "400", subsets: ["latin"] })

export function Header() {
    const [isPagedScrolledDown, setIsPageScrolledDown] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => setIsPageScrolledDown(window.scrollY > 680);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <header className={`${isPagedScrolledDown ? "bg-primary" : "bg-secondary"} z-50 fixed w-full flex flex-row items-center justify-between gap-2 px-8 py-6 h-24 transition-colors`}>
            <motion.h1 
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                className={`text-3xl ${righteous.className} cursor-grab`}
            >
                Mtw
            </motion.h1>

            <HeaderNav />
        </header>
    )   
}
