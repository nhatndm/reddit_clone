import { CARDVIEW } from "./type";
import { changeView } from "./action";

export default {
  state: {
    view_mode: CARDVIEW
  },
  reducers: {
    changeView
  }
};
