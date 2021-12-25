import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import "./app.scss";
import UserList from "./pages/UserList/UserList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import User from "./pages/User/User";
import AddUser from "./pages/AddUser/AddUser";
import MoviesList from "./pages/MoviesList/MoviesList";
import Login from "./pages/Login/Login";
import Movie from "./pages/Movie/Movie";
import AddMovie from "./pages/AddMovie/AddMovie";
import ListsLists from "./pages/listsList/ListsLists";
import List from "./pages/List/List";
import AddList from "./pages/AddList/AddList";
import { useEffect } from "react";
import jwt from "jwt-decode";
import { logout } from "./redux/apiCalls";
import { useDispatch } from "react-redux";
import Loading from "./components/Loading/Loading";
import { useState } from "react";
import { useAppSelector } from "./hooks/selectors";
import { TokenType } from "../../front/src/App";

function App() {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const token: TokenType = jwt(currentUser?.accessToken);
      if (token.exp * 1000 < Date.now()) {
        logout(dispatch);
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
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            {currentUser ? <Redirect to="/" /> : <Login />}
          </Route>
          {currentUser ? (
            <>
              <Topbar />
              <div className="wrapper">
                <Sidebar />
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/users" exact>
                  <UserList />
                </Route>
                <Route path="/user/:id" exact>
                  <User />
                </Route>
                <Route path="/add" exact>
                  <AddUser />
                </Route>
                <Route path="/movies" exact>
                  <MoviesList />
                </Route>
                <Route path="/movie/:id" exact>
                  <Movie />
                </Route>
                <Route path="/newmovie" exact>
                  <AddMovie />
                </Route>
                <Route path="/lists" exact>
                  <ListsLists />
                </Route>
                <Route path="/list/:id" exact>
                  <List />
                </Route>
                <Route path="/newlist" exact>
                  <AddList />
                </Route>
              </div>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
