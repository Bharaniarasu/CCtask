import Routers from "./Routers";
import Main from "./components/layouts/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./components/redux/actions/AuthAction";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthState);
  console.log("App Renders");
  useEffect(() => {
    // if (!user) {
    dispatch(loadUser);
    // }
  }, [dispatch]);

  return (
    <Router>
      <Main>
        <Routers />
      </Main>
    </Router>
  );
}

export default App;
