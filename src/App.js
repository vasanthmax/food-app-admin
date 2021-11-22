import routes from "./router";
import { useRoutes } from "react-router-dom";
function App() {
  const router = useRoutes(routes);

  return <div className="App">{router}</div>;
}

export default App;
