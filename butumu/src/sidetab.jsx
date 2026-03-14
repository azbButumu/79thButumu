import './sidetab.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from './assets/const'
import { useEffect, useState } from 'react';

function Sidetab() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  const where = location.pathname === "/";

  const [active,setactive] = useState(false);

  const tap = () => {
    setactive(!active);
  }

  const navigation = useNavigate();

  const home = () => {
    navigation(ROUTES.HOME);
  }

  const butumu = () => {
    navigation(ROUTES.BUTUMU);
  }

  const katudou = () => {
    navigation(ROUTES.KATUDOU);
  }

  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    setIsBottom(scrollTop + windowHeight >= documentHeight - 2);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <h1 id="title" class={where && !isScrolled ? "" : "small"} onClick={home}>物理部展</h1>
      <div class = "tab" id ={isBottom ? "hide" : ""}>
        <ul className = {active === true ? "active" : ""}>
          <li>
            <h2 onClick={butumu} class ="nothing">About</h2>
          </li>
          <li>
            <h2 onClick={katudou}>Activities</h2>
          </li>
          <li>
            <h2 onClick={home}>Home</h2>
          </li>
        </ul>
        <li onClick={tap}>
          <h2 class ="top">Menu</h2>
          <div class = "icon1" id = {active === true ? "ActiveIcon1" : ""}/>
          <div class = "icon2" id = {active === true ? "ActiveIcon2" : ""}/>
        </li>
      </div>
    </>
  )
}

export default Sidetab