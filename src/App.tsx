import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import GlobalStyles from "./styles/GlobalStyles";

import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
      </AuthContextProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
