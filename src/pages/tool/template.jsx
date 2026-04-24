import { useEffect, useState } from 'react'
import './template.css'
import LikeButton from './likeButton';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../assets/const';

export default function Template({visible,title,image,pageId,jump}) {

    const [visibility,setvisibility] = useState(visible);

    const navigation = useNavigate();

    const jump = () => {
        const path = ROUTES.PRODUCT.replace("productId", jump)
        navigation(path)
    }

    useEffect(() => {
        setvisibility(visible);
    }, [visible])

    return (
        <div className = {visibility ? "visi" : "hide"}>
            <main className = "temp">
                <img src = {image}/>
                <hgroup>
                    <div>
                        <h2>{title}</h2>
                        <LikeButton pageId={pageId}/>
                    </div>
                    <div className = "jump">
                        <p>作品ページ<TfiArrowTopRight size={18} className = "arr" onClick={jump}/></p>
                    </div>
                </hgroup>
            </main>
        </div>
    )
}
