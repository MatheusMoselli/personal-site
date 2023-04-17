import { Righteous } from "next/font/google"
import { HeaderNav } from "./HeaderNav"

const righteous = Righteous({ weight: "400", subsets: ["latin"] })

export function Header() {
    return (
        <div className="bg-gray-800 w-full flex flex-row gap-2 px-8 py-6">
            <h1 className={`text-3xl ${righteous.className} self-start`}>Mtw</h1>

            <HeaderNav />
        </div>
    )   
}
