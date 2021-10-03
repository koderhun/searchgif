import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import { Layout } from "antd"
import { Home } from "./Home"
import { Music } from "./Music"
import { MusicList } from "./MusicList"
import { HeaderPage } from "../components/HeaderPage"

const { Content } = Layout

export const Root = () => {
  return (
    <BrowserRouter basename="/searchgif">
      <Layout>
        <HeaderPage />
        <Content className="container">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/music" exact>
              <Music />
            </Route>
            <Route path="/music/:id" component={MusicList} />
          </Switch>
        </Content>
      </Layout>
    </BrowserRouter>
  )
}
