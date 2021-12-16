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
import Movie from "./pages/movie/Movie";
import Watch from "./pages/watch/Watch";
import { RootState } from "./context/store";
import { useAppSelector } from "./hooks/selector";
function App() {
  const { currentUser } = useAppSelector((state: RootState) => state.user);

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
            element={currentUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={currentUser ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
