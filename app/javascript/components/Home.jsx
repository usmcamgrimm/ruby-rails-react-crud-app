import React from 'react'
import { Layout } from 'antd'
import Players from './Players'
import Header from './Header'

const { Content, Footer } = Layout
const { year } = new Date().getFullYear()

export default () => (
  <Layout classname="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-content-layout" style={{ margin: "100px auto" }}>
        <h1>Players Roster</h1>
        <Players />
      </div>
    </Content>
    <Footer style={{ text-align: "center" }}>@copy;Adrian Grimm {year}</Footer>
  </Layout>
)