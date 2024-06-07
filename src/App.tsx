import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import Navigation from "./navigation/Navigation.tsx";

function App() {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App
