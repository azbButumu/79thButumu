import { useEffect, useState } from 'react'
import './template.css'

export default function Template({visible,sltenji,tag,title,image,txt}) {

    const [focus,setfocus] = useState(false);

    const select = () => {
        setfocus(!focus);
    }

    const [visibility,setvisibility] = useState(visible);

    useEffect (() => {
        setvisibility(visible);
        setfocus(false);
    }, [visible])

    useEffect (() => {
        setfocus(sltenji);
    }, [sltenji])

    return (
        <div class = {visibility ? "visible object" : "invisible object"}>
            <div class = {focus ? "close obMain" : "more obMain"}>
                <div class = "obTitle">
                    <h2>{title}</h2>
                    <p>#{tag}</p>
                </div>
                <div class = "obImage">
                    <img src={image} />
                </div>
                <div class = "obTxt">
                    <p>{txt}</p>
                </div>
            </div>
            <div class = {focus ? "close function" : "more function"}>
                <p class = "fcTxt1 fcTxt" onClick={select}>閉じる</p>
                <p class = "fcTxt2 fcTxt" onClick={select}>もっと見る</p>
            </div>
        </div>
    )
}
