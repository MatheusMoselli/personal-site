import { HeaderNavItemProps } from "./types";
import { motion } from "framer-motion";

export function HeaderNavItem(props: HeaderNavItemProps) {
    return (
        <motion.li 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
        >
            <a 
                href={props.href} 
                className={`text-base px-4 py-3`}
            >
                {props.title}
            </a>
        </motion.li>
    )
}
