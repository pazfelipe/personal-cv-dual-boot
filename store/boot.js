export const state = () => ({
  booted: null
});

export const mutations = {
  SET_BOOT: (state, payload) => {
    state.booted = payload;
  }
};

export const actions = {
  set_boot: ({ commit }, payload) => {
    commit('SET_BOOT', payload);
  }
};

export const getters = {
  get_boot: state => state.booted
};