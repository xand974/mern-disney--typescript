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
import { useAppSelector, useAppDispatch } from "./hooks/selector";
import { useEffect } from "react";
import jwt from "jwt-decode";
import { useState } from "react";
import { signOut } from "./api/auth";
import Loading from "./components/loading/Loading";
import CatPage from "./pages/catpage/CatPage";
export type TokenType = {
  exp: number;
};
function App() {
  const { currentUser } = useAppSelector((state: RootState) => state.user);

  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (currentUser) {
      const token: TokenType = jwt(currentUser.accessToken);
      if (token.exp * 1000 < Date.now()) {
        signOut(dispatch);
        setLoading(true);
      } else {
        setLoading(true);
      }
    } else {
      setLoading(true);
    }
  }, [currentUser, dispatch]);

  if (!loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoutes component={Home} />} />
          <Route
            path="/movie/:id"
            element={<PrivateRoutes component={Movie} />}
          />
          <Route
            path="/watch/:id"
            element={<PrivateRoutes component={Watch} />}
          />
          <Route path="/cat" element={<PrivateRoutes component={CatPage} />} />
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
