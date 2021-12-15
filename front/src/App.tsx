import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/log/Login";
import Register from "./pages/log/Register";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes";
import { useState } from "react";
import Movie from "./pages/movie/Movie";
import Watch from "./pages/watch/Watch";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoutes component={Home} />} />
          <Route
            path="/movies/:id"
            element={<PrivateRoutes component={Movie} />}
          />
          <Route
            path="/watch/:id"
            element={<PrivateRoutes component={Watch} />}
          />
          <Route
            path="/login"
            element={isAuth ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isAuth ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
