import { createStore } from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const store = createStore({
  state() {
    return {
      wineCustId: "",
      profCustId: "",
      orderID: "",
      profile: [],
      subs: [],
      wines: [],
      quiz: [],
    };
  },
  actions,
  mutations,
  getters,
});

export default store;
