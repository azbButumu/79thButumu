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
        <div className = {visibility ? "visible object" : "invisible object"}>
            <div className = {focus ? "close obMain" : "more obMain"}>
                <div className = "obTitle">
                    <h2>{title}</h2>
                    <p>#{tag}</p>
                </div>
                <div className = "obImage">
                    <img src={image} />
                </div>
                <div className = "obTxt">
                    <p>{txt}</p>
                </div>
            </div>
            <p className = "select" onClick={select}>
                {focus ? "閉じる" : "もっと見る"}
            </p>
        </div>
    )
}
