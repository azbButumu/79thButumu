import { AiOutlineX } from "react-icons/ai"
import { TfiArrowTopRight } from "react-icons/tfi"
import './footer.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "./assets/const"

export default function Footer() {

    const [plus1, setplus1] = useState(false)
    
    const [plus2, setplus2] = useState(false)

    const clplus1 = () => {
        setplus1(!plus1);
    }
    
    const clplus2 = () => {
        setplus2(!plus2);
    }

    const x = () => {
        window.location.href = "https://x.com/butumubutumu";
    }

    const navigation = useNavigate();

    const about = () => {
        navigation(ROUTES.BUTUMU);
    }
    
    const activity = () => {
        navigation(ROUTES.KATUDOU);
    }

    const tesla = (num) => {
        const path = ROUTES.PRODUCT.replace(":productNum", num)
        navigation(path)
    }

  return (
    <div>
      <footer>
            <nav>
                <p>(サイトマップ)</p>
                <ul>
                    <li className ={plus1 ? "actplus1" : ""} onClick={clplus1}>
                        <h3>Room 350</h3>
                        <p>(350教室)</p>
                        <ul>
                            <li onClick={() => tesla(1)}>(テスラコイル)</li>
                            <li onClick={() => tesla(2)}>(LEDキューブ)</li>
                            <li onClick={() => tesla(3)}>(自作CPU)</li>
                            <li onClick={() => tesla(4)}>(ドローン)</li>
                            <li onClick={() => tesla(5)}>(四脚ロボ)</li>
                            <li onClick={() => tesla(6)}>(お絵かきロボット)</li>
                            <li onClick={() => tesla(7)}>(トランスフォーマー)</li>
                            <li onClick={() => tesla(13)}>(チカチカ)</li>
                        </ul>
                        <div>
                            <div className = "plus1"/>
                            <div className = "plus2"/>
                        </div>
                    </li>
                    <li className ={plus2 ? "actplus2" : ""} onClick={clplus2}>
                        <h3>Room 333</h3>
                        <p>(333教室)</p>
                        <ul>
                            <li onClick={() => tesla(8)}>(VRゲーム)</li>
                            <li onClick={() => tesla(9)}>(音ゲー)</li>
                            <li onClick={() => tesla(10)}>(イライラ棒)</li>
                            <li onClick={() => tesla(11)}>(自作ゲーム)</li>
                            <li onClick={() => tesla(12)}>(エアホッケー)</li>
                        </ul>
                        <div>
                            <div className = "plus1"/>
                            <div className = "plus2"/>
                        </div>
                    </li>
                    <li onClick={about}>
                        <h3>About</h3>
                        <p>(物理部展とは)</p>
                        <TfiArrowTopRight size={25} className = "arrow"/>
                    </li>
                    <li onClick={activity}>
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
    </div>
  )
}
