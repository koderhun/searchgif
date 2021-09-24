import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Root } from "./pages"
import { store } from "./redux/store"
import "./styles/styles.scss"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
