import { parse } from "node-html-parser"

export const parseFolders = (body) => {
  const root = parse(body)

  let arrayFolder = root.querySelectorAll("td>a").map((val, key) => {
    return decodeURI(val.getAttribute("href"))
  })
  arrayFolder = arrayFolder.slice(1, arrayFolder.length)

  return arrayFolder
}

export const setError = (state, action) => {
  state.status = "rejected"
  state.error = action.payload
}
