import { useEffect, useState } from 'react'
import './tenji_buturi.css'
import Template from './tool/template'
import './TenjiObject/butudai'
import { CAR, CPU, FLY, LED, PAINT, ROBOT, TESLA } from './TenjiObject/butudai';
import Footer from '../footer';

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

    return (
      <>
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
                title = {TESLA.TITLE}
                image = {TESLA.IMAGE}
                pageId = {TESLA.LIKE}
                jump = {TESLA.JUMP}
                />
                <Template
                visible = {digital || all}
                title = {LED.TITLE}
                image = {LED.IMAGE}
                pageId = {LED.LIKE}
                jump = {LED.JUMP}
                />
                <Template
                visible = {digital || all}
                title = {CPU.TITLE}
                image = {CPU.IMAGE}
                pageId = {CPU.LIKE}
                jump = {CPU.JUMP}
                />
                <Template
                visible = {robot || all}
                title = {FLY.TITLE}
                image = {FLY.IMAGE}
                pageId = {FLY.LIKE}
                jump = {FLY.JUMP}
                />
                <Template
                visible = {robot || all}
                title = {ROBOT.TITLE}
                image = {ROBOT.IMAGE}
                pageId = {ROBOT.LIKE}
                jump = {ROBOT.JUMP}
                />
                <Template
                visible = {robot || all}
                title = {PAINT.TITLE}
                image = {PAINT.IMAGE}
                pageId = {PAINT.LIKE}
                jump = {PAINT.JUMP}
                />
                <Template
                visible = {robot || all}
                title = {CAR.TITLE}
                image = {CAR.IMAGE}
                pageId = {CAR.LIKE}
                jump = {CAR.JUMP}
                />
            </nav>
        </div>
        <Footer />
      </>
    )
}