import { Provider } from "react-redux"
import Layout from "./pages/Layout"
import appStore from "./store/appStore"

function App() {

  return (
    <Provider store={appStore}>
      <Layout/>
    </Provider>
  )
}

export default App
