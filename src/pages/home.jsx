import './home.css'
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../assets/const"
import { AiOutlineX } from "react-icons/ai";
import { TfiArrowTopRight } from "react-icons/tfi";
import { motion, useInView } from "motion/react"
import test1 from './image/test1.jpg'
import test2 from './image/test2.jpg'
import test3 from './image/test3.jpg'
import test4 from './image/test4.jpg'
import test5 from './image/test5.jpg'
import butudai from './image/butudai.jpg'
import testClass from './image/test_class.jpg'
import camera from './image/677.png'
import mirror from './image/mirror.jpg'
import m1game from './image/m1game.jpg'
import quest2 from './image/quest2.jpg'
import Testimage from './image/tenji.jpg'
import shiiru from './image/shiiru01.png'

function Home() {

    const motionX = 20;

    const motionXr = -20

    const motionY = 20;

    const motionDuration = 0.5;

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 500) {
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

    const navigation = useNavigate();

    const classroom = () => {
        navigation(ROUTES.CLASS);
    }

    const jikken = () => {
        navigation(ROUTES.BUTURI);
    }

    const [image,setimage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setimage((prev) => (prev + 1) % 8);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const [buy,setbuy] = useState(true);

    const [zInx,setzInx] = useState(true);

    useEffect(() => {
        const buytimer = setInterval(() => {
            setbuy(prev => !prev);
        }, 5000);

        return () => clearInterval(buytimer);
    }, [buy]);

    useEffect(() => {
        const xInxTimer = setTimeout(() => {
            setzInx(prev => !prev);
        }, 750);

        return () => clearTimeout(xInxTimer);
    }, [buy]);

    const tapbuy = () => {
        setbuy(prev => !prev);
    }

    const x = () => {
        window.location.href = "https://x.com/butumubutumu";
    }

    const ref = useRef(null)

    const isInView = useInView(ref)

    const [plus1, setplus1] = useState(false)

    const [plus2, setplus2] = useState(false)

    const clplus1 = () => {
        setplus1(!plus1);
    }

    const clplus2 = () => {
        setplus2(!plus2);
    }

    return (
        <>
            <div className = "image">
                <div className = {image === 0 ? "open" : "hide"}>
                    <h2 className = "title">Self-made Game</h2>
                    <p className = "explain">Developed by Kou</p>
                    <div className = "bar"/>
                    <img src={m1game} onClick={jikken}/>
                </div>
                <div className = {image === 1 ? "open" : "hide"}>
                    <h2 className = "title">VR Game</h2>
                    <p className = "explain">Developed by Kurosawa,Kinoshita</p>
                    <div className = "bar"/>
                    <img src={quest2} onClick={classroom}/>
                </div>
                <div className = {image === 2 ? "open" : "hide"}>
                    <h2 className = "title">Infinity Mirror</h2>
                    <p className = "explain">Developed by Sorita</p>
                    <div className = "bar"/>
                    <img src={mirror}/>
                </div>
                <div className = {image === 3 ? "open" : "hide"}>
                    <h2 className = "title">Test</h2>
                    <div className = "bar"/>
                    <img src={test1}/>
                </div>
                <div className = {image === 4 ? "open" : "hide"}>
                    <h2 className = "title">Test</h2>
                    <div className = "bar"/>
                    <img src={test2}/>
                </div>
                <div className = {image === 5 ? "open" : "hide"}>
                    <h2 className = "title">Test</h2>
                    <div className = "bar"/>
                    <img src={test3}/>
                </div>
                <div className = {image === 6 ? "open" : "hide"}>
                    <h2 className = "title">Test</h2>
                    <div className = "bar"/>
                    <img src={test4}/>
                </div>
                <div className = {image === 7 ? "open" : "hide"}>
                    <h2 className = "title">Test</h2>
                    <div className = "bar"/>
                    <img src={test5}/>
                </div>
                <div className = "yellow">
                    <div className = "nativebar"/>
                </div>
            </div>
            <main>
                <div className = "MainFlex">
                    <aside>
                        <div className = "proList">
                            <motion.ul
                            initial={{x: "calc(100vmin - 20px)"}}
                            whileInView={{x: 0}}
                            transition={{duration: 2.5, type: "spring", bounce: 0.4}}
                            viewport={{margin: "0px 0px -300px 0px", once: true}}
                            >
                                <li>
                                    <img src={m1game}/>
                                    <p>自作ゲーム</p>
                                    <h3>01</h3>
                                </li>
                                <li>
                                    <img src={quest2}/>
                                    <p>VRゲーム</p>
                                    <h3>02</h3>
                                </li>
                                <li>
                                    <img src={mirror}/>
                                    <p>インフィニティミラー</p>
                                    <h3>03</h3>
                                </li>
                                <li>
                                    <img src={Testimage}/>
                                    <p>テスト</p>
                                    <h3>04</h3>
                                </li>
                            </motion.ul>
                        </div>
                        <div className = "proTxt">
                            <p>上の写真は<wbr/>物理部無線班の部員が<wbr/>半年ほどかけて<wbr/>製作した作品です。</p>
                            <p>300教室（物理台実験室）と<wbr/>300教室（高三の一教室）の<wbr/>二教室で展示をしているので<wbr/>ぜひ見に来てください！</p>
                        </div>
                    </aside>
                    <nav>
                        <hgroup>
                            <h2 ref={ref}>展示教室</h2>
                            <div className ={isInView ? "highlight" : ""}/>
                        </hgroup>
                        <motion.img
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.7}}
                        viewport={{margin: "0px 0px -400px 0px", once: true}}
                        src={shiiru}
                        className = "shiiru"/>
                        <motion.div
                        initial={{opacity: 0, y: motionY, x:motionX}}
                        whileInView={{opacity: 1, y: 0, x: 0}}
                        transition={{duration: motionDuration}}
                        viewport={{once: true, margin: "0px 0px -300px 0px"}}
                        className = "block"
                        onClick={jikken}>
                            <img src={butudai} className = "butudai"/>
                            <h2 className = "class1"><span>300</span>教室</h2>
                            <div><p className = "tapToGo" id = "cls1button">TAP TO VISIT <TfiArrowTopRight size={13} className = "jump1"/></p></div>
                            <p className = "txt3">ドローン、トランスフォーマー、自作CPUなど演示展示が多くある教室です。電子工作体験やクイズなど実際に体験していただける展示なども設置しています。</p>
                        </motion.div>
                        <motion.img
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.7}}
                        viewport={{margin: "0px 0px -400px 0px", once: true}}
                        src={shiiru}
                        className = "shiiru"/>
                        <motion.div
                        initial={{opacity: 0, y: motionY, x:motionXr}}
                        whileInView={{opacity: 1, y: 0, x: 0}}
                        transition={{duration: motionDuration}}
                        viewport={{once: true, margin: "0px 0px -300px 0px"}}
                        className = "block"
                        onClick={classroom}>
                            <img src={testClass} className = "class"/>
                            <h2 className = "class2"><span>300</span>教室</h2>
                            <div><p className = "tapToGo" id = "cls2button">TAP TO VISIT <TfiArrowTopRight size={13} className = "jump1"/></p></div>
                            <p className = "txt4">VR、アーケードゲーム、イライラ棒など体験展示が多くある教室です。</p>
                        </motion.div>
                    </nav>
                    <article className = "sale">
                        <div className = {buy ? "act1" : "act2"}>
                            <motion.div
                            id = "imgDiv1"
                            className = {zInx ? "z76" : "z75"}
                            onClick={tapbuy}
                            >
                                <img src={Testimage}/>
                            </motion.div>
                            <motion.div
                            id = "imgDiv2"
                            className = {zInx ? "z75" : "z76"}
                            onClick={tapbuy}
                            >
                            <img src={Testimage}/>
                        </motion.div>
                        </div>
                        <motion.hgroup
                        initial={{opacity: 0, y: motionY, x: motionX}}
                        whileInView={{opacity: 1, y: 0, x: 0}}
                        transition={{duration: motionDuration}}
                        viewport={{once: true, margin: "0px 0px -200px 0px"}}
                        >
                            <div>
                                <div>
                                    <h2>販売物<wbr/>(301教室)</h2>
                                </div>
                                <p>301教室では例年物販を行なっております。今年も例年通り、ほとんと全ての展示物の設計をまとめた回路図集、現中三の部員がマイコンを使って作った自作ゲーム、ハンダ付け体験用のチカチカキットを販売しています。ぜひ購入してください！</p>
                            </div>
                        </motion.hgroup>
                        <motion.div
                        initial={{opacity: 0, y: motionY, x: motionXr}}
                        whileInView={{opacity: 1, y: 0, x: 0}}
                        transition={{duration: motionDuration}}
                        viewport={{once: true, margin: "0px 0px -200px 0px"}}
                        className = "priceDiv"
                        >
                            <ul className = "saleList">
                                <li>
                                    <p>回路図集</p>
                                    <div/>
                                    <p className = "price">¥300</p>
                                </li>
                                <li>
                                    <p>自作ゲーム</p>
                                    <div/>
                                    <p className = "price">¥500</p>
                                </li>
                                <li>
                                    <p>チカチカキット</p>
                                    <div/>
                                    <p className = "price">¥200</p>
                                </li>
                            </ul>
                        </motion.div>
                    </article>
                </div>
                <footer>
                    <nav>
                        <p>(サイトマップ)</p>
                        <ul>
                            <li className ={plus1 ? "actplus1" : ""} onClick={clplus1}>
                                <h3>Room 301</h3>
                                <p>(301教室)</p>
                                <ul>
                                    <li>(テスラコイル)</li>
                                    <li>(LEDキューブ)</li>
                                    <li>(自作CPU)</li>
                                    <li>(ドローン)</li>
                                    <li>(蒸気機関)</li>
                                    <li>(お絵かきロボット)</li>
                                    <li>(トランスフォーマー)</li>
                                    <li>(チカチカ)</li>
                                </ul>
                                <div>
                                    <div className = "plus1"/>
                                    <div className = "plus2"/>
                                </div>
                            </li>
                            <li className ={plus2 ? "actplus2" : ""} onClick={clplus2}>
                                <h3>Room 302</h3>
                                <p>(302教室)</p>
                                <ul>
                                    <li>(VRゲーム)</li>
                                    <li>(音ゲー)</li>
                                    <li>(イライラ棒)</li>
                                    <li>(自作ゲーム)</li>
                                    <li>(エアホッケー)</li>
                                </ul>
                                <div>
                                    <div className = "plus1"/>
                                    <div className = "plus2"/>
                                </div>
                            </li>
                            <li>
                                <h3>About</h3>
                                <p>(物理部展とは)</p>
                                <TfiArrowTopRight size={25} className = "arrow"/>
                            </li>
                            <li>
                                <h3>Activity</h3>
                                <p>(活動)</p>
                                <TfiArrowTopRight size={25} className = "arrow"/>
                            </li>
                        </ul>
                    </nav>
                    <div className = "xlink" onClick={x}>
                        <AiOutlineX size={24} color={"#ddd"} className = "xIcon"/>
                    </div>
                    <h2 className = "endTitle">物理部展</h2>
                </footer>
            </main>
        </>
    )
}

export default Home