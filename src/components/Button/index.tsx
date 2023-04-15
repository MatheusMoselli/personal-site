import { ButtonProps } from "./types";

export function Button({ className, ...props }: ButtonProps) { 
    return <button 
        className={"border-blue-300 bg-blue-600" + (className || "")}
        {...props}
    >
        click me!
    </button>
}
