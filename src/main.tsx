import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/App.tsx"

import GlobalStyles from "./styles/global.ts"
import FontStyles from "./styles/fontStyles.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FontStyles />
    <App />
    <GlobalStyles />
  </React.StrictMode>
)
