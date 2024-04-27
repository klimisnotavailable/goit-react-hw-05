import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"

export default function Navigation(second) {
    return <nav>
        <ul className={css.navigationList}>
            <NavLink className={css.navigationLink} to='/'>Home</NavLink>
            <NavLink className={css.navigationLink} to='/movies'>Movies</NavLink>
        </ul>
    </nav>
}