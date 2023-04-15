import { Button } from "../Button";

export function Header() {
    return (
        <div className="bg-red-500 w-full h-15 flex flex-row gap-2 p-5">
            <h1 className="text-3xl font-['Righteous'] self-start">Mtw</h1>

            <Button className="self-end" /> 
        </div>
    )   
}
