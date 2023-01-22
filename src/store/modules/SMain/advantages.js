export default {
  namespaced: true,
  state: {
    advantages: [
      {
        title: "Handmade",
        text: "All works presented are handmade",
        classModification: "handmade",
      },
      {
        title: "Personal pattern",
        text: "All patterns were personally designed",
        classModification: "pattern",
      },
      {
        title: "Natural materials",
        text: "All works are made from natural materials",
        classModification: "material",
      },
      {
        title: "Fast shipping",
        text: " We cooperate with many companies",
        classModification: "shipping",
      },
    ],
  },
  getters: {
    advantages(state) {
      return state.advantages;
    },
  },
};
