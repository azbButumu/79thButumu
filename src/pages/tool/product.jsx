import LikeButton from "./likeButton"

export default function Product({img1,img2,img3,mainTxt,title,like}) {

    if (mainTxt == null) {
        mainTxt = "読み込みエラー"
    }

  return (
    <>
        <div className = "product">
            <h2>{title}</h2>
            <div className = "img">
                <img src = {img1}/>
                <img src = {img2}/>
                <img src = {img3}/>
            </div>
            <div className = "mainTxt">
                {mainTxt}
            </div>
            <LikeButton pageId = {like}/>
        </div>  
    </>
  )
}
