import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { Layout } from "antd"
import { Home } from "./Home"
import { HeaderPage } from "../components/HeaderPage"

const { Content } = Layout

export const Root = () => {
  return (
    <BrowserRouter>
      <Layout>
        <HeaderPage />
        <Content className="container">
          <Switch>
            <Route path="/searchgif" exact>
              <Home />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}
