import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      profile: [
        {
          name: "Wayne",
          avatarUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg",
        },
      ],
    };
  },
  mutations: {
    changeProfile(state) {
      (state.profile.name = "Hamish"),
        (state.profile.avatarUrl =
          "https://secure.gravatar.com/avatar/2eae0d518dd78b1bebb1f450cc4800f5?s=96&d=mm&r=g");
    },
  },
  action: {
    increment() {},
  },
  getter: {},
});

export default store;
