import { useEffect, useState } from 'react'
import './tenji_buturi.css'
import Template from './TenjiObject/template'
import tenji from './image/tenji.jpg'
import { useSearchParams } from 'react-router-dom';
import './TenjiObject/butudai'
import { CAR, CPU, FLY, LED, PAINT, SL, TESLA } from './TenjiObject/butudai';

export default function Tenji(){

    const [analog, setanalog] = useState(false);

    const [digital, setdigital] = useState(false);

    const [robot, setrobot] = useState(false);

    const [all, setall] = useState(false);

    useEffect(() => {
        if (analog === false && digital === false && robot === false) {
            setall(true);
        } else {
            setall(false);
        }
    }, [analog, digital, robot])

    useEffect(() => {
        if (all === true) {
            setanalog(false);
            setdigital(false);
            setrobot(false);
        }
    }, [all])

    const clAll = () => {
        setall(true);
    }

    const clanalog = () => {
        setanalog(!analog);
    }

    const cldigital = () => {
        setdigital(!digital);
    }

    const clrobot = () => {
        setrobot(!robot);
    }

    const [fctenji, setfctenji] = useState(0);

    const [tenjiNum] = useSearchParams();

    useEffect (() => {
        const slNum = tenjiNum.get("tenjiNum");

        if (slNum !== null) {
            setfctenji(Number(slNum));
        }
    }, [tenjiNum])

    return (
        <div className = "room1">
            <article>
                <h2>Map</h2>
                <div className = "map">

                </div>
            </article>
            <nav>
                <h2>Product</h2>
                <div className = "tagSelect">
                    <div className = "tag" onClick={clAll}>
                        <p className ={all ? "" : "false"}>ALL</p>
                    </div>
                    <div className = "tag" onClick={clanalog}>
                        <p className ={analog ? "" : "false"}>アナログ</p>
                    </div>
                    <div className = "tag" onClick={cldigital}>
                        <p className ={digital ? "" : "false"}>デジタル</p>
                    </div>
                    <div className = "tag" onClick={clrobot}>
                        <p className ={robot ? "" : "false"}>ロボット</p>
                    </div>
                </div>
                <Template
                visible = {analog || all}
                sltenji = {fctenji === 1}
                tag = {TESLA.TAG}
                title = {TESLA.TITLE}
                image = {TESLA.IMAGE}
                txt = {TESLA.TXT}
                />
                <Template
                visible = {digital || all}
                sltenji = {fctenji === 2}
                tag = {LED.TAG}
                title = {LED.TITLE}
                image = {LED.IMAGE}
                txt = {LED.TXT}
                />
                <Template
                visible = {digital || all}
                sltenji = {fctenji === 3}
                tag = {CPU.TAG}
                title = {CPU.TITLE}
                image = {CPU.IMAGE}
                txt = {CPU.TXT}
                />
                <Template
                visible = {robot || all}
                sltenji = {fctenji === 4}
                tag = {FLY.TAG}
                title = {FLY.TITLE}
                image = {FLY.IMAGE}
                txt = {FLY.TXT}
                />
                <Template
                visible = {analog || all}
                sltenji = {fctenji === 5}
                tag = {SL.TAG}
                title = {SL.TITLE}
                image = {SL.IMAGE}
                txt = {SL.TXT}
                />
                <Template
                visible = {robot || all}
                sltenji = {fctenji === 6}
                tag = {PAINT.TAG}
                title = {PAINT.TITLE}
                image = {PAINT.IMAGE}
                txt = {PAINT.TXT}
                />
                <Template
                visible = {robot || all}
                sltenji = {fctenji === 7}
                tag = {CAR.TAG}
                title = {CAR.TITLE}
                image = {CAR.IMAGE}
                txt = {CAR.TXT}
                />
            </nav>
        </div>
    )
}