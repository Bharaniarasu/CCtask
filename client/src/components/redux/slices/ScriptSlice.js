import { createSlice } from "@reduxjs/toolkit";

const ScriptSlice = createSlice({
  name: "script",
  initialState: {
    loading: false,
    panel: false,
    response: {},
  },
  reducers: {
    showPanel: (state, action) => {
      return { panel: true };
    },
    hidePanel: (state, action) => {
      return { panel: false };
    },
    scriptRequest: (state, action) => {
      return { showPanel: true, loading: true };
    },
    scriptSuccess: (state, action) => {
      console.log(action.payload);
      return {
        loading: false,
        title: action.payload.title,
        showPanel: false,
        response: action.payload.data,
      };
    },
    scriptFailure: (state, action) => {
      return { loading: false, showPanel: false, error: action.payload };
    },
  },
});
const { actions, reducer } = ScriptSlice;
export const {
  scriptRequest,
  scriptSuccess,
  scriptFailure,
  showPanel,
  hidePanel,
} = actions;
export default reducer;
