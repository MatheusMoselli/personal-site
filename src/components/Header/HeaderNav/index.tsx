import { HeaderNavItem } from "./HeaderNavItem";
import { HeaderNavProps } from "./types";

export function HeaderNav(props: HeaderNavProps) {
    return (
    <nav>
        <ul className="flex flex-row gap-3">
            <HeaderNavItem 
                title="Sobre Mim"
                href="#about-me"
                active
            />
        
            <HeaderNavItem 
                title="Meu Ensino"
                href="#knowledge"
                active={false}
            />
        </ul>
    </nav>
    )
}
