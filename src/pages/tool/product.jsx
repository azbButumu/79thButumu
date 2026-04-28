import { useState } from "react"
import Footer from "../../footer"
import LikeButton from "./likeButton"
import './product.css'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

export default function Product({img1,img2,img3,mainTxt,title,like}) {

    if (mainTxt == null) {
        mainTxt = "読み込みエラー"
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
            </div>
            <div className = "state">
                <div className = "stateup" onClick={down}/>
                <div className = "statedown" onClick={up}/>
            </div>
            <h2>{title}</h2>
            <div className = "mainTxt">
                <p>{mainTxt}</p>
            </div>
            <div className = "proLike">
                <LikeButton pageId = {like}/>
            </div>
        </div>  
        <Footer/>
    </>
  )
}
