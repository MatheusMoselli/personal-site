import { Righteous } from "next/font/google"
import { HeaderNav } from "./HeaderNav"

const righteous = Righteous({ weight: "400", subsets: ["latin"] })

export function Header() {
    return (
        <header className="bg-gray-800 w-full flex flex-row items-center gap-2 px-8 py-6 max-h-24">
            <h1 className={`text-3xl ${righteous.className}`}>Mtw</h1>

            <HeaderNav />
        </header>
    )   
}
