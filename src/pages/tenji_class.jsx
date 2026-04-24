import './tenji_buturi.css'
import Template from './tool/template'
import './TenjiObject/class'
import { VR, SOUND, IRAIRA, M1, AIR } from './TenjiObject/class';
import Footer from '../footer';

export default function Class(){
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
                <Template
                visible = {true}
                title = {VR.TITLE}
                image = {VR.IMAGE}
                pageId = {VR.LIKE}
                jump = {VR.JUMP}
                />
                <Template
                visible = {true}
                title = {SOUND.TITLE}
                image = {SOUND.IMAGE}
                pageId = {SOUND.LIKE}
                jump = {SOUND.JUMP}
                />
                <Template
                visible = {true}
                title = {IRAIRA.TITLE}
                image = {IRAIRA.IMAGE}
                pageId = {IRAIRA.LIKE}
                jump = {IRAIRA.JUMP}
                />
                <Template
                visible = {true}
                title = {M1.TITLE}
                image = {M1.IMAGE}
                pageId = {M1.LIKE}
                jump = {M1.JUMP}
                />
                <Template
                visible = {true}
                title = {AIR.TITLE}
                image = {AIR.IMAGE}
                pageId = {AIR.LIKE}
                jump = {AIR.JUMP}
                />
            </nav>
        </div>
        <Footer />
      </>
    )
}