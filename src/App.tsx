import Home from "./page/Home";
import Login from "./page/Login";
import { loginStore } from "./hooks/loginstore";

function App() {
  const { logged } = loginStore();

  return (
    <div className="w-screen h-screen flex">
      {!logged ? <Login /> : <Home />}
    </div>
  );
}

export default App;
