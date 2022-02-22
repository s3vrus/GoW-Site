import * as React from "react"
import '../styles/enemies.css'
import Layout from '../components/layout'
import draugr from '../images/enemies/Draugry.png'
import ancient from '../images/enemies/ancienty.png'
import valk from '../images/enemies/valky.png'
import rev from '../images/enemies/revenanty.png'
import elf from '../images/enemies/darkelfz.png'
import dragon from '../images/enemies/dragony.png'
import nmare from '../images/enemies/nightmarey.png'
import ogre from '../images/enemies/ogrey.png'
import tatzel from '../images/enemies/tatzelwurmy.png'
import trav from '../images/enemies/travellery.png'
import troll from '../images/enemies/trolly.png'
import wulv from '../images/enemies/wulvery.png'
import axe from '../images/axe-gray.png'

const Enemies = () => {

  return (
    <Layout>
        <div className="enemies-page">
            <header>
                <div className="enemies-header">
                    <div className="row">
                        <div className="box">
                            <h1>
                                <span>ENEMIES YOU WILL ENCOUNTER</span>
                            </h1>
                        </div>
                    </div>
                    <div className="slice slice--flipped"></div>
                    <section className="p2"></section>
                </div>
            </header>

            <main>
                <div className="background">
                    <img className="axe" src={axe} alt="axe"/>
                </div>
                <div className="row">
                    <div className="column">
                        <ul className="cards">
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={draugr} alt="Draugr"/>
                                    </div>

                                    <div>
                                        <p>DRAUGR</p>
                                    </div>
                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={ancient} alt="Ancient"/>
                                    </div>

                                    <div>
                                        <p>ANCIENT</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={valk} alt="Valkrie"/>
                                    </div>

                                    <div>
                                        <p>VALKRIE</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={rev} alt="Revenant"/>
                                    </div>

                                    <div>
                                        <p>REVENANT</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={elf} alt="Dark Elf"/>
                                    </div>

                                    <div>
                                        <p>DARK ELF</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={dragon} alt="Dragon"/>
                                    </div>

                                    <div>
                                        <p>DRAGON</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={nmare} alt="Nightmare"/>
                                    </div>

                                    <div>
                                        <p>NIGHTMARE</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={ogre} alt="Ogre"/>
                                    </div>

                                    <div>
                                        <p>OGRE</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={tatzel} alt="Tatzelwurm"/>
                                    </div>

                                    <div>
                                        <p>TATZELWURM</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={trav} alt="Traveller"/>
                                    </div>

                                    <div>
                                        <p>TRAVELLER</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={troll} alt="Troll"/>
                                    </div>

                                    <div>
                                        <p>TROLL</p>
                                    </div>

                                </a>
                            </li>
                            <li className="card-items">
                                <a className="enemy-card">
                                    <div>
                                        <img src={wulv} alt="Wulver"/>
                                    </div>

                                    <div>
                                        <p>WULVER</p>
                                    </div>

                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    </Layout>
  )
}

export default Enemies