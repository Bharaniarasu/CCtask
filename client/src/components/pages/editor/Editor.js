import { useEffect, useState } from "react";
import "./editor.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/AuthAction";
const Editor = () => {
  const [sidebar, setSidebar] = useState(true);
  const { response, loading, title } = useSelector(
    (state) => state.ScriptState
  );
  const { user } = useSelector((state) => state.AuthState);
  const dispatch = useDispatch();

  console.log(response);
  useEffect(() => {
    if (!user) {
      dispatch(loadUser);
    }
  }, [dispatch, user]);
  return (
    <div className="d-flex editor">
      <section className="editor_section d-flex">
        <header>
          <div className="editor_section_header mt-1">
            <div className="editor_section_header_title ms-4">
              <h5>{title && title}</h5>
            </div>
            <div className="editor_section_header_menu d-flex mx-4">
              <div className="d-flex mx-4">
                <div className="d-flex mx-2">
                  <a href="/">
                    <span className="material-symbols-outlined text-dark fs-4">
                      home
                    </span>
                  </a>
                </div>
                <div className="d-flex mx-2">
                  <a href="/">
                    <span className="material-symbols-outlined text-dark fs-4">
                      menu
                    </span>
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <span className="avatar">
                  <a href="/profile">
                    <img
                      src={user && user.user.picture}
                      alt={user && user.user.name}
                      className="w-100 rounded-circle"
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="d-flex ">
          <aside
            className={sidebar ? "d-none d-md-block" : "d-block d-md-none"}
          >
            <div className="panel position-sticky top-0 ">
              <ul className="nav-menu list-unstyled p-2 ps-4 pb-0">
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-item text-decoration-none d-flex text-dark">
                    <span>
                      <span className="material-symbols-outlined d-flex">
                        info
                      </span>
                    </span>
                    <span className="ms-2">How to get Nolan AI for Free</span>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-item text-decoration-none d-flex text-dark">
                    <span>
                      <span className="material-symbols-outlined">
                        smart_display
                      </span>
                    </span>
                    <span className="ms-2">How to Use NolanAI</span>
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center">
                  <a className="nav-item text-decoration-none d-flex text-dark">
                    <span>
                      <span className="material-symbols-outlined">
                        download
                      </span>
                    </span>
                    <span className="ms-2">Download</span>
                  </a>
                </li>
              </ul>
              <form className="">
                <input type="text" className="form-control rounded-pill" />
              </form>
              <ul className="nav-menu list-unstyled p-2 ps-4">
                <li className="nav-item  align-items-center">
                  <a className="nav-item text-decoration-none d-flex text-dark">
                    <span>
                      <span className="material-symbols-outlined">book</span>
                    </span>
                    <span className="ms-2">Scenes</span>
                  </a>
                  <ul className="nav-menu list-unstyled p-2 ps-4">
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-item text-decoration-none d-flex text-dark">
                        <span>
                          <span className="material-symbols-outlined">add</span>
                        </span>
                        <span className="ms-2">Create Scene</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav-menu list-unstyled p-2 ps-4 pt-0 ">
                <li className="nav-item  align-items-center">
                  <a className="nav-item text-decoration-none d-flex text-dark">
                    <span>
                      <span className="material-symbols-outlined">group</span>
                    </span>
                    <span className="ms-2">Create Scenes</span>
                  </a>
                  <ul className="nav-menu list-unstyled p-2 ps-4">
                    <li className="nav-item d-flex align-items-center">
                      <a className="nav-item text-decoration-none d-flex text-dark">
                        <span>
                          <span className="material-symbols-outlined">add</span>
                        </span>
                        <span className="ms-2">Create Scene</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </aside>
          <main className="w-100 px-0">
            <div className="position-sticky top-0 header">
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center ">
                  <span
                    class="material-symbols-outlined menu-bar-icon"
                    onClick={() => {
                      sidebar ? setSidebar(false) : setSidebar(true);
                    }}
                  >
                    signal_cellular_alt
                  </span>
                </div>
                <div className="d-flex align-items-center ">
                  {/* <button className=""></button> */}
                  <ul className="list-unstyled d-flex p-1 fs-6 align-items-center mb-0 ">
                    <li className="d-flex p-2 mx-2">
                      <span className="d-flex align-items-center">
                        <span className="material-symbols-outlined d-flex fs-5 me-2">
                          neurology
                        </span>
                      </span>
                      <span>Brainstorming</span>
                    </li>
                    <li className="d-flex p-2 mx-2">
                      <span className="d-flex align-items-center">
                        <span className="material-symbols-outlined d-flex fs-5 me-2">
                          menu
                        </span>
                      </span>
                      <span>Script Smart</span>
                    </li>
                    <li className="d-flex p-2 mx-2">
                      <span className="d-flex align-items-center">
                        <span className="material-symbols-outlined d-flex fs-5 me-2">
                          description
                        </span>
                      </span>
                      <span>Title page</span>
                    </li>
                    <li className="d-flex p-2 mx-2">
                      <span className="d-flex align-items-center">...</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-container">
              <div className="text-wrapper">
                <div className="text-box">
                  {loading ? (
                    <p>Please wait .....</p>
                  ) : (
                    response && response.content
                  )}
                  {/* {Response.response.content} */}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Editor;
