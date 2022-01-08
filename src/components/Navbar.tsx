import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {Burger} from "./Burger";
 
export const Navbar = ({ data }: any) => {
  const [windowWidth, setWindowWidth] = useState<null | number>(null);
  const [showBurger, setShowBurger] = useState<boolean>(false);
  const [burgerClicked, setBurgerClicked] = useState<boolean>(false);
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])

  useEffect(() => {
    window.addEventListener("resize", (e) => handleResize(e))
  }, [])

  useEffect(() => {
    windowWidth != null && windowWidth>688 ? setShowBurger(false):setShowBurger(true)
  }, [windowWidth])

  const handleResize = (event:any) => {
    setWindowWidth(event.target.innerWidth);
  }

  const clickHandler=() =>{
    setBurgerClicked(!burgerClicked);
  }

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <div className="navbar__list__name">
          <li className="navbar__list__item navbar__list__item--title">
            THE PLANETS
          </li>
        </div>
        {!showBurger && <div className="navbar__list__wrapper">
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
        </div>}
       {showBurger && windowWidth != null && <Burger clickHandler={clickHandler}></Burger>}
       {burgerClicked && <div className="navbar__list__wrapper--burger">
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
        </div>}
      </ul>
    </nav>
  );
};
