import { NavLink } from "react-router-dom";

export const Navbar = ({ data }: any) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <div className="navbar__list__name">
          <li className="navbar__list__item navbar__list__item--title">
            THE PLANETS
          </li>
        </div>
        <div className="navbar__list__wrapper">
        {data &&
          data.map((planet: any) => (
            <li className="navbar__list__item" key={planet.name}>
              <NavLink
                className={(navData) =>
                  navData.isActive
                    ? "navbar__list__link--active"
                    : "navbar__list__link"
                }
                to={`/${planet.name}`}
              >
                {planet.name}
              </NavLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};
