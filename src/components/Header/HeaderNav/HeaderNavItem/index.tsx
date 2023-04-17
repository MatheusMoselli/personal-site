import { HeaderNavItemProps } from "./types";

export function HeaderNavItem(props: HeaderNavItemProps) {
    return (
        <li>
            <a href={props.href} className={`${props.active ? 'bg-green-200' : 'bg-transparent'}`}>{props.title}</a>
        </li>
    )
}
