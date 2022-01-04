import { NavLink } from "react-router-dom";


export const Navbar = ({data}: any) => {

    return (
        <nav className="navbar">
           <ul className="navbar__list">
               <li className="navbar__list__item navbar__list__item--title">THE PLANETS</li>
               {data && data.map((planet:any) => 
               <li className="navbar__list__item" key={planet.name}>
                   <NavLink className={(navData) => navData.isActive ? "navbar__list__link--active":"navbar__list__link" } to={`/${planet.name}`}>{planet.name}</NavLink>
               </li>
               )}
           </ul> 
        </nav>
    )
}
