import { Righteous } from "next/font/google"
import { HeaderNav } from "./HeaderNav"
import { motion } from "framer-motion";

const righteous = Righteous({ weight: "400", subsets: ["latin"] })

export function Header() {
    return (
        <header className="bg-gray-800 w-full flex flex-row items-center justify-between gap-2 px-8 py-6 h-24">
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
