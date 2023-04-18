import { HeaderNavItemProps } from "./types";

export function HeaderNavItem(props: HeaderNavItemProps) {
    return (
        <li>
            <a href={props.href} className={`text-base px-4 py-3`}>{props.title}</a>
        </li>
    )
}
