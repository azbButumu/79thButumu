import { useEffect, useState } from "react"
import mirror from './image/mirror.jpg'
import './home.css'
import m1game from './image/m1game.jpg'
import quest2 from './image/quest2.jpg'
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../assets/const"
import test1 from './image/test1.jpg'
import test2 from './image/test2.jpg'
import test3 from './image/test3.jpg'
import test4 from './image/test4.jpg'
import test5 from './image/test5.jpg'
import butudai from './image/butudai.jpg'
import testClass from './image/test_class.jpg'
import camera from './image/677.png'
import { AiOutlineX } from "react-icons/ai";
import { TfiArrowTopRight } from "react-icons/tfi";
import { motion, scale } from "motion/react"


function Home() {

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

    const up = () => {
        setimage(image + 1);
    }

    const down = () => {
        setimage(image - 1);
    }

    useEffect(() => {
        if(image >= 8){
            setimage(0);
        }
    },[image])

    useEffect(() => {
        const timer = setInterval(() => {
            setimage((prev) => prev + 1);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const x = () => {
        window.location.href = "https://x.com/butumubutumu";
    }

    return (
        <div class ={isScrolled ? "" : ""}>
            <div class = "image">
                <div class = {image === 0 ? "open" : "hide"}>
                    <h2 class = "title">Self-made Game</h2>
                    <p class = "explain">Developed by Kou</p>
                    <div class = "bar"/>
                    <img src={m1game} onClick={jikken}/>
                </div>
                <div class = {image === 1 ? "open" : "hide"}>
                    <h2 class = "title">VR Game</h2>
                    <p class = "explain">Developed by Kurosawa,Kinoshita</p>
                    <div class = "bar"/>
                    <img src={quest2} onClick={classroom}/>
                </div>
                <div class = {image === 2 ? "open" : "hide"}>
                    <h2 class = "title">Infinity Mirror</h2>
                    <p class = "explain">Developed by Sorita</p>
                    <div class = "bar"/>
                    <img src={mirror}/>
                </div>
                <div class = {image === 3 ? "open" : "hide"}>
                    <h2 class = "title">Test</h2>
                    <div class = "bar"/>
                    <img src={test1}/>
                </div>
                <div class = {image === 4 ? "open" : "hide"}>
                    <h2 class = "title">Test</h2>
                    <div class = "bar"/>
                    <img src={test2}/>
                </div>
                <div class = {image === 5 ? "open" : "hide"}>
                    <h2 class = "title">Test</h2>
                    <div class = "bar"/>
                    <img src={test3}/>
                </div>
                <div class = {image === 6 ? "open" : "hide"}>
                    <h2 class = "title">Test</h2>
                    <div class = "bar"/>
                    <img src={test4}/>
                </div>
                <div class = {image === 7 ? "open" : "hide"}>
                    <h2 class = "title">Test</h2>
                    <div class = "bar"/>
                    <img src={test5}/>
                </div>
            </div>
            <div class = "nativebar"/>
            <div class = "main">
                <div class = "MainGrid">
                    <img src={camera} class = "camera"/>
                    <motion.h2
                    whileInView={{scale: 2}}
                    class = "cameraMain">写真撮影可能</motion.h2>
                    <p class = "cameraTxt">周囲の方に配慮して<wbr/>撮影してください</p>
                    <h2 class = "inMain">技術を使わされる側<wbr/>から使う側に</h2>
                    <p class = "txt1">現代社会には多種多様な<wbr/>技術があふれており、<wbr/>私たちはそれらを<wbr/>選択する以前に、<wbr/>使わざるを得ない状況に<wbr/>置かれています。<wbr/>こうした在り方は果たして<wbr/>健全なのでしょうか。</p>
                    <p class = "txt2">私たち物理部展の<wbr/>展示員は、<wbr/>現代社会を支える技術を<wbr/>自ら作り、<wbr/>その仕組みを理解し、<wbr/>使いこなすことを通して、<wbr/>この問いに向き合います。</p>
                    <div class = "tenji">
                        <h2 class = "tenjiView">展示教室</h2>
                        <div id = "block1" class = "block" onClick={jikken}>
                            <img src={butudai} class = "butudai"/>
                            <div class = "classname1">
                                <h2 class = "class1"><span>300</span>教室</h2>
                                <p class = "tapToGo" id = "cls1button">TAP TO VISIT <TfiArrowTopRight size={13} class = "jump1"/></p>
                            </div>
                            <p class = "txt3">ドローン、トランスフォーマー、自作CPUなど演示展示が多くある教室です。電子工作体験やクイズなど実際に体験していただける展示なども設置しています。</p>
                        </div>
                        <div id = "block2" class = "block" onClick={classroom}>
                            <img src={testClass} class = "class"/>
                            <div class = "classname2">
                                <h2 class = "class2"><span>300</span>教室</h2>
                                <p class = "tapToGo" id = "cls2button">TAP TO VISIT <TfiArrowTopRight size={13} class = "jump1"/></p>
                            </div>
                            <p class = "txt4">VR、アーケードゲーム、イライラ棒など体験展示が多くある教室です。</p>
                        </div>
                        <div class = "endroll">
                            <div class = "xlink" onClick={x}>
                                <AiOutlineX size={24} color={"#ddd"} class = "xIcon"/>
                                <h2 class = "x">公式X (旧twitter)</h2>
                                <TfiArrowTopRight size={12} color={"#ddd"} class = "jump"/>
                            </div>
                            <p class = "txt5">Develoed by Kurosawa</p>
                            <h2 class = "endTitle">物理部展</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home