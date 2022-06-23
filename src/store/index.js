import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import landing from "./landing";
import blog from "./blog";
import teaching from "./teaching";
import book from "./book";
import video from "./video";
import player from "./player";
import search from "./search";
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      landing,
      blog,
      player,
      teaching,
      book,
      video,
      search,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
