import Header from "./Header";
import Footer from "./Footer";
import ScriptForm from "./ScriptForm";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Editor from "../pages/editor/Editor";
import Edit from "../pages/editor/Edit";
const Main = ({ children }) => {
  const Response = useSelector((state) => state.ScriptState);
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);
  return (
    <>
      {currentUrl === "/editor" ? (
        <Editor />
      ) : (
        <>
          {Response.panel && <ScriptForm />}

          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default Main;
