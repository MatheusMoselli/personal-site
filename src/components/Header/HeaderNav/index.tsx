import { HeaderNavItem } from "./HeaderNavItem";
import { HeaderNavProps } from "./types";

export function HeaderNav(props: HeaderNavProps) {
    return (
    <nav>
        <ul className="flex flex-row gap-3">
            <HeaderNavItem 
                title="&#129680; Sobre Mim"
                href="#about-me"
                active
            />
        
            <HeaderNavItem 
                title="&#128640; Meu Ensino"
                href="#knowledge"
                active={false}
            />
        </ul>
    </nav>
    )
}
