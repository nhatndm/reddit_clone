import { CARDVIEW } from "./type";

export default {
  state: {
    view_mode: CARDVIEW
  },
  reducers: {
    changeView(state, viewMode) {
      return {
        ...state,
        view_mode: viewMode
      };
    }
  }
};
