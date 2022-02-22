import * as React from "react"
import Layout from "../components/layout"

//BG IMAGE IMPORTS
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"


const Error = () => {
  
  const { backgroundImage123 } = useStaticQuery (
      graphql`
          query {
              backgroundImage123: file(relativePath: {eq: "404-bg.jpg"}) {
                  childImageSharp {
                  gatsbyImageData(
                      width: 1980, 
                      quality: 50, 
                      webpOptions: {quality: 70}
                  )
                  }
              }
          }
      `
  )

  const pluginImage = getImage(backgroundImage123)

  return (
    <Layout>
      <BgImage image={pluginImage} className="index-bg">
          <main className="error-page">
            <section>
              <h1>404</h1>
              <h3>You're not supposed to be here...</h3>
            </section>
          </main>
      </BgImage>
    </Layout>
  )
}

export default Error
