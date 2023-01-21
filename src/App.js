import { useState, useEffect  } from "react";
import Routes from "./routes"
import { AppContext } from "./context"
import { isLoggedIn, setCurrentUser } from "./utils";

const App = () => {
  const [data, setData] = useState({ message: "Hello World!" });

  useEffect(() => {
    isLoggedIn && setData({...data, currentUser: setCurrentUser() })
  }, [])

  return (
    <AppContext.Provider value={{ data, setData }}>
      <div className="App">
        <Routes />
      </div>
    </AppContext.Provider>
  );
}

export default App;
