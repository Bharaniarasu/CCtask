import React, { useEffect, useState } from "react";
import { hidePanel, showPanel } from "../redux/slices/ScriptSlice";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { getResponse } from "../redux/actions/ScriptAction";
import { useNavigate } from "react-router-dom";

const ScriptForm = () => {
  const [title, setTitle] = useState("");
  const [plot, setPlot] = useState("");
  const [genre, setGenre] = useState("");

  const { user } = useSelector((state) => state.AuthState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = { title, plot, genre };
    dispatch(getResponse(formData));
    navigate("/editor");
  };

  useEffect(() => {
    if (!user) {
      dispatch(hidePanel());
      navigate("/login");
    }
  }, [user, dispatch]);
  return (
    <Modal>
      <h5>Create Script</h5>
      <form onSubmit={submitHandler}>
        <div className="form-group mt-4">
          <label className="form-label" htmlFor="title">
            <span className="text-danger">*</span>Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-4">
          <label className="form-label" htmlFor="Plot">
            <span className="text-danger"></span>Plot
          </label>
          <textarea
            type="text"
            className="form-control"
            value={plot}
            onChange={(e) => {
              setPlot(e.target.value);
            }}
          />
        </div>
        <div
          className="form-control p-3 mt-4 d-flex align-items-center justify-content-between"
          style={{ fontSize: "14px" }}
        >
          Suggest screenplay titles based on the plot.
          <button className="btn disabled" style={{ fontSize: "12px" }}>
            Suggest titles
          </button>
        </div>
        <div className="form-group mt-4">
          <label className="form-label" htmlFor="genre">
            <span className="text-danger">*</span>Genre
          </label>
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
        </div>
        <div className="d-flex justify-content-end py-3">
          <button className="btn" onClick={() => dispatch(hidePanel())}>
            cancel
          </button>
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ScriptForm;
