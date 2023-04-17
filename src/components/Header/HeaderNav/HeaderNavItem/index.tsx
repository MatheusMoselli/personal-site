import { HeaderNavItemProps } from "./types";

export function HeaderNavItem(props: HeaderNavItemProps) {
    return (
        <li>
            <a href={props.href} className={`text-base border-white border px-4 py-3 rounded-md hover:border-orange-700 transition-colors`}>{props.title}</a>
        </li>
    )
}
