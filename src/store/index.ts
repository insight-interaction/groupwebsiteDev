import { createStore } from 'vuex'

export default createStore({
  state: {
    // accessMapDict: {} as AccessMapDict<AccessMap>, //access, entropy, idx, type, zone
    svgStr: '',
    vSpec: ""
  },
  modules: {
  },
  getters: {
  },
  mutations: {
    setsvgStr(state, str) {
      state.svgStr = str;
    },
    setvSpec(state, str) {
      // console.log('setvSpec', str);
      state.vSpec = str;
    }
   },
  actions: {
  },
  strict: process.env.NODE_ENV !== "production"
});
