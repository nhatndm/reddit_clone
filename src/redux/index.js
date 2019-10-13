import { init } from "@rematch/core";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import App from "./app";
import Post from "./post";
const historyIns = createBrowserHistory();

const storeIns = init({
  models: {
    app: App,
    post: Post
  },
  redux: {
    devtoolOptions: {
      name: "reddit-clone-redux",
      disabled: false
    },
    reducers: {
      router: connectRouter(historyIns)
    },
    middlewares: [routerMiddleware(historyIns)]
  }
});

export const store = storeIns;
export const history = historyIns;
