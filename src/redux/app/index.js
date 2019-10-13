import { CARDVIEW } from "./type";
import { changeView } from "./action";

export default {
  state: {
    viewMode: CARDVIEW
  },
  reducers: {
    changeView
  }
};
