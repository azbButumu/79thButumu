import './home.css'
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../assets/const"
import { TfiArrowTopRight } from "react-icons/tfi";
import { motion, useInView } from "motion/react"
import butudai from './image/butudai.jpg'
import testClass from './image/test_class.jpg'
import m1game from './image/m1game.jpg'
import quest2 from './image/quest2.jpg'
import Testimage from './image/tenji.jpg'
import shiiru from './image/shiiru01.png'
import Footer from '../footer';

function Home() {

    const motionX = 20;

    const motionXr = -20

    const motionY = 20;

    const motionDuration = 0.5;

    const navigation = useNavigate();

    const [selectImg,setSelectImg] = useState(0);

    const [first, setFirst] = useState(0);

    const tapImg = () => {
        setSelectImg(prev => (prev + 1))
        setFirst(prev => (prev + 1))
    }

    const classroom = () => {
        navigation(ROUTES.CLASS);
    }

    const jikken = () => {
        navigation(ROUTES.BUTURI);
    }

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

    return (
        <>
            <div className = "image" id = {first == 0 ? "off" : "on"}> 
                {/* アニメーションは任せた */}
                <ul className = "imgStack" onClick={tapImg}>
                    <li className = {`img${4 - (selectImg + 3) % 4}`}>
                        <img src = {Testimage}/>
                        <h4>(作者など)1</h4>
                    </li>
                    <li  className = {`img${4 - (selectImg + 2) % 4}`}>
                        <img src = {Testimage}/>
                        <h4>(作者など)2</h4>
                    </li>
                    <li className = {`img${4 - (selectImg + 1) % 4}`}>
                        <img src = {Testimage}/>
                        <h4>(作者など)3</h4>
                    </li>
                    <li className = {`img${4 - (selectImg + 0) % 4}`}>
                        <img src = {Testimage}/>
                        <h4>(作者など)4</h4>
                    </li>
                </ul>
            </div>
            <main className = "home">
                <div className = "MainFlex">
                    <aside>
                        <h2>Product</h2>
                        <div className = "proList">
                            <motion.ul
                            initial={{x: "calc(100vmin - 20px)"}}
                            whileInView={{x: 0}}
                            transition={{duration: 0.5}}
                            viewport={{margin: "0px 0px -300px 0px", once: true}}
                            >
                                <li>
                                    <img src={m1game}/>
                                    <div>
                                        <h3>01</h3>
                                        <p>自作ゲーム</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={quest2}/>
                                    <div>
                                        <h3>02</h3>
                                        <p>VRゲーム</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Testimage}/>
                                    <div>
                                        <h3>03</h3>
                                        <p>インフィニティミラー</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Testimage}/>
                                    <div>
                                        <h3>04</h3>
                                        <p>テスト</p>
                                    </div>
                                </li>
                            </motion.ul>
                        </div>
                        <div className = "proTxt">
                            <p>上の写真は<wbr/>物理部無線班の部員が<wbr/>半年ほどかけて<wbr/>製作した作品です。</p>
                            <p>350教室（物理台実験室）と<wbr/>333教室（高三の一教室）の<wbr/>二教室で展示をしているので<wbr/>ぜひ見に来てください！</p>
                        </div>
                    </aside>
                    <nav>
                        <hgroup>
                            <h2 >Exhibition</h2>
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
                            <div>
                                <h2 className = "class1"><span>350</span>教室</h2>
                                <div>
                                    <p className = "tapToGo" id = "cls1button">TAP TO VISIT <TfiArrowTopRight size={13} className = "jump1"/></p>
                                </div>
                            </div>
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
                            <div>
                                <h2 className = "class2"><span>333</span>教室</h2>
                                <div>
                                    <p className = "tapToGo" id = "cls2button">TAP TO VISIT <TfiArrowTopRight size={13} className = "jump1"/></p>
                                </div>
                            </div>
                            <p className = "txt4">VR、アーケードゲーム、イライラ棒など体験展示が多くある教室です。</p>
                        </motion.div>
                    </nav>
                    <article className = "sale">
                        <h2>Sales</h2>
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
                                    <h2>販売物<wbr/>(350教室)</h2>
                                </div>
                                <p>350教室では例年物販を行なっております。今年も例年通り、ほとんと全ての展示物の設計をまとめた回路図集、現中三の部員がマイコンを使って作った自作ゲーム、ハンダ付け体験用のチカチカキットを販売しています。ぜひ購入してください！</p>
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
                <Footer />
            </main>
        </>
    )
}

export default Home