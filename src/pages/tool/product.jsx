import { useMemo, useState } from "react"
import Footer from "../../footer"
import LikeButton from "./likeButton"
import './product.css'
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia"
import { PRODUCT } from "../TenjiObject/prodactData"
import { ROUTES } from "../../assets/const"
import { useNavigate } from "react-router-dom"

export default function Product({img1,img2,img3,mainTxt,title,like,num}) {

    if (mainTxt == null) {
        mainTxt = "読み込みエラー"
    }

    const N = Number(num);

    const NextN = N + 1;

    const BackN = N - 1;

    const onBack = num > 1;

    const backData = useMemo(() => {
        if (!onBack) return null;
        if (N == 8)  return PRODUCT[13];
        if (N == 13) return PRODUCT[7];
        return PRODUCT[BackN];
    }, [num]);

    const nextData = useMemo(() => {
        if (N == 12) return null;
        if (N == 7)  return PRODUCT[13];
        if (N == 13) return PRODUCT[8];
        return PRODUCT[NextN];
    }, [num])

    const navigation = useNavigate();

    const link = (nav) => {
        const path = ROUTES.PRODUCT.replace(":productNum", nav)
        navigation(path)
    }

    const [imgState, setImgState] = useState(3);

    const up = () => {
        if (imgState < 5) {
            setImgState(prev => (prev + 1))
        }
    }

    const down = () => {
        if (imgState > 3) {
            setImgState(prev => (prev - 1))
        }
    }

  return (
    <>
        <div className = "product">
            <div className = "img">
                <img src = {img1} className = {`state${imgState}`}/>
                <img src = {img2} className = {`state${imgState - 1}`}/>
                <img src = {img3} className = {`state${imgState - 2}`}/>
                <div className = "state">
                    <div className = "stateup" onClick={down}/>
                    <div className = "statedown" onClick={up}/>
                </div>
            </div>
            <div className = "proTxt">
                <h2>{title}</h2>
                <div className = "mainTxt">
                    <p>{mainTxt}</p>
                </div>
                <div className = "proLike">
                    <LikeButton pageId = {like}/>
                </div>
            </div>
            <div className = "bottomFlex">
                {onBack && backData && (
                    <h2 onClick={() => link(backData.JUMP)}>
                        <LiaArrowLeftSolid />
                        <span>{backData.TITLE}</span>
                    </h2>
                )}
                {nextData && (
                    <h2 className = "next" onClick={() => link(nextData.JUMP)}>
                        <span>{nextData.TITLE}</span>
                        <LiaArrowRightSolid />
                    </h2>
                )}
            </div>
        </div>  
        <Footer/>
    </>
  )
}
