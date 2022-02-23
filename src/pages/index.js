import * as React from "react"
import '../styles/styles.css'
import Layout from '../components/layout'
import logo from '../images/logo-large.png'
// import turn from '../images/turn.png'

//BG IMAGE IMPORTS
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const Index = () => {
  
  const { backgroundImage123 } = useStaticQuery (
      graphql`
          query {
              backgroundImage123: file(relativePath: {eq: "main-bg.jpg"}) {
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

  // Would be cool if on scroll axe comes from bg pic and hits side of the screen or something like that

  const pluginImage = getImage(backgroundImage123)

  return (
    <Layout>
      <BgImage image={pluginImage} className="index-bg">
        <main>
          <section id="home">
            <div className="index-logo">
                <img src={logo} alt="God of War logo"/>
            </div>
            <div className="index-box">
              <a href="https://www.youtube.com/watch?v=HqQMh_tij0c" target="_blank" rel="noopener noreferrer" >
                AVAILABLE NOW ON PC
              </a>
            </div>
          </section>
        </main>
      </BgImage>

      {/* <section id="sec-2">
        <a href="#home">
          <div className="hidden-button">
            <img src={turn} className="turn" alt="Turn"/>
          </div>
        </a>
      </section> */}

    </Layout>
  )
}

export default Index
