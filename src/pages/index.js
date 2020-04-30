import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
            cm-phaser-library
          </p>
          <h2>Documentation for cm-phaser-library, an accessible, open source Phaser 3 library built with Typescript.</h2>
          <br/>
          <Link to="/docs/get-started/introduction">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Get Started</Button>
          </Link>
          <Button type="primary" size="large" icon="github" href="https://github.com/cmr624/cm-phaser-library">Github</Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage