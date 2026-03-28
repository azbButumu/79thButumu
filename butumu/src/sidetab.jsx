import './sidetab.css'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ROUTES } from './assets/const'
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

function Sidetab() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [active,setactive] = useState(false);

  const location = useLocation();

  const navigation = useNavigate();

  const ishome = location.pathname === "/";

  const isbutudai = location.pathname === "/Room301"

  const isclass = location.pathname === "/Room302"

  const isbutumu = location.pathname === "/butumu"
  
  const iskatudou = location.pathname === "/katsudou"

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

  const tap = () => {
    setactive(!active);
  }

  useEffect(() => {
    setactive(false);
  },[location])

  const home = () => {
    navigation(ROUTES.HOME);
  }

  const room301 = () => {
    navigation(ROUTES.BUTURI);
  }

  const room302 = () => {
    navigation(ROUTES.CLASS);
  }

  const butumu = () => {
    navigation(ROUTES.BUTUMU);
  }

  const katudou = () => {
    navigation(ROUTES.KATUDOU);
  }

  return (
    <>
      <h1 id="title" class={ishome && !isScrolled ? "" : "small"} onClick={home}>物理部展</h1>
      <div class = "menu">
        <div class ={active ? "close" : "more"} onClick={tap}>
          <div class = "tapbar" id = "bar1"/>
          <div class = "tapbar" id = "bar2"/>
          <div class = "tapbar" id = "bar3"/>
        </div>
        <ul class ={active ? "active" : ""}>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.5}}}
          transition={{duration: 0, delay: 0}}
          onClick={home}>
            <h3>Home</h3>
            <p>(ホームに戻る)</p>
          </motion.li>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.55}}}
          transition={{duration: 0, delay: 0}}
          onClick={room301}>
            <h3>Room 301</h3>
            <p>(301教室)</p>
          </motion.li>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.6}}}
          transition={{duration: 0, delay: 0}}
          onClick={room302}>
            <h3>Room 302</h3>
            <p>(302教室)</p>
          </motion.li>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.65}}}
          transition={{duration: 0, delay: 0}}
          onClick={butumu}>
            <h3>About</h3>
            <p>(物理部展とは)</p>
          </motion.li>
          <motion.li
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1,transition: {duration: 0.3, delay: 0.7}}}
          transition={{duration: 0, delay: 0}}
          onClick={katudou}>
            <h3>Activity</h3>
            <p>(普段の活動)</p>
          </motion.li>
        </ul>
      </div>
    </>
  )
}

export default Sidetab