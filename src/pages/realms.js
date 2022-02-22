import * as React from "react"
import '../styles/realms.css'
import Layout from '../components/layout'
import alf from '../images/alf-pic.jpg'
import hel from '../images/hel-pic.jpg'
import jot from '../images/jot-pic.jpg'
import musp from '../images/musp-pic.jpg'
import nifl from '../images/nifl-pic.jpg'


//BG IMAGE IMPORTS
import { graphql, useStaticQuery } from "gatsby"
import {getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Realms = () => {
  
  const { backgroundImage123 } = useStaticQuery (
      graphql`
          query {
              backgroundImage123: file(relativePath: {eq: "realms-bg.jpg"}) {
                  childImageSharp {
                  gatsbyImageData(
                      width: 1980,
                      quality: 50, 
                      webpOptions: {quality: 50}
                  )
                  }
              }
          }
      `
  )

  const pluginImage = getImage(backgroundImage123)

  return (
    <Layout>
        <BgImage image={pluginImage} className="realms-bg">
            <div className="realm-page"></div>
            <div className="slice">
                <div className="card">
                    <h1>DISCOVER THE NINE REALMS</h1>
                    <p>Using the world tree you are able to travel across the realms of the norse mythology. Scroll below to take a look at the realms you encounter while playing God of War
                        We haven't been to all of the realms yet so we don't have information on some of thems.
                    </p>
                </div>
            </div>
            <section className="p1"></section>
        </BgImage>

        <article>
            <section className="alf-section">
                <div className="container-center">
                    <div className="realms-row">
                        <div className="realms-wrapper-left">
                            <img src={alf} alt="Alfheim Landscape"/>
                        </div>
                        <div className="realms-wrapper-right">
                            <h1>ALFHEIM</h1>
                            <p>Home of the Light and Dark elves and the first realm that you travel to. The realm is full of artistic 
                                architecture and colorful vegitation. The Light of Alfheim is what gives the Bifrost its power to allow
                                you to travel between realms. The Light and Dark elves have been at war for its possession for centuries.
                                When you travel there for the first time the Dark elves are in control and you must fight their forces to
                                obtain the light.</p>
                        </div>
                    </div>
                </div>
                <div className="slice slice--flipped"></div>
                <section className="p"></section>
            </section>

            <section className="hel-section">
                <div className="container-center">
                    <div className="realms-row">
                        <div className="realms-wrapper-left">
                            <h1>HELHEIM</h1>
                            <p>The underworld of Norse mythology and also known as the realm of the dead. The Realm of the Dead is 
                                a nightmarish land of intense darkness and unyielding cold, being locked in a state of permanent 
                                deep-freeze, the extreme temperatures are so lethal that even Odin himself is unable to survive there 
                                for very long. You journey into Helheim to retrieve the heart of the Keeper of the Bridge of the Damned
                                to save Arteus becuase he is ill.</p>
                        </div>
                        <div className="realms-wrapper-right">
                            <img src={hel} alt="Helheim Landscape"/>
                        </div>
                    </div>
                </div>
                <div className="slice"></div>
                <section className="p"></section>
            </section>

            <section className="jot-section">
                <div className="container-center">
                    <div className="realms-row">
                        <div className="realms-wrapper-left">
                            <img src={jot} alt="Jötunheim Landscape"/>
                        </div>
                        <div className="realms-wrapper-right">
                            <h1>Jötunheim</h1>
                            <p>This is the final destination of the main story line. Home of the giants, they once roamed Midgard
                                but Odin feared the prophecy of his fall to the Giants come Ragnarök so he slayed them. Tyr was
                                able to help some escape back to Jötunheim and made it near impossible for anyone else to travel
                                there. Which you expierience first hand spending the majority of the game trying to find a way in. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="slice slice--flipped"></div>
                <section className="p"></section>
            </section>

            <section className="musp-section">
                <div className="container-center">
                    <div className="realms-row">
                        <div className="realms-wrapper-left">
                            <h1>MUSPELHEIM</h1>
                            <p>Muspelheim is known as "The Realm of Fire", stated to be the source of all heat in the Nine Realms. 
                                It is the home of Surtr the brave and his descendants, the Fire Giants, that are prophesied to burn 
                                down and destroy the God Realm of Asgard during Ragnarök. At the very top of the mountain where the 
                                Trials of Muspelheim are held is where the Valkyrie Gondul was imprisoned.</p>
                        </div>
                        <div className="realms-wrapper-right">
                            <img src={musp} alt="Muspelheim Landscape"/>
                        </div>
                    </div>
                </div>
                <div className="slice"></div>
                <section className="p"></section>
            </section>

            <section className="nifl-section">
                <div className="container-center">
                    <div className="realms-row">
                        <div className="realms-wrapper-left">
                            <img src={nifl} alt="Niflheim Landscape"/>
                        </div>
                        <div className="realms-wrapper-right">
                            <h1>NIFLHEIM</h1>
                            <p>Niflheim is known as "The Realm of Fog", originally being a realm of endless snow, wind, ice and mist. 
                                However, an ambitious Dwarf alchemist named Ivaldi decided to settle a workshop in the land of mist 
                                and found a way to harness all the frosty power of Niflheim, creating works of marvel that shocked 
                                the realms of both men and Gods. The Valkyrie Hildr was imprisoned in one of the chamber's of Ivaldi's workshop.</p>
                        </div>
                    </div>
                </div>
            </section>
        </article>

        {/* <div class="slice">thing the vh of alf is pushing it down?</div> */}

    </Layout>
  )
}

export default Realms