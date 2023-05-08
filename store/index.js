export const state = () => ({
  count: 0,
  uploadJD: null,
  userSelectionOption: null,
  userSelectionService: null,
  currentStep: 0,
});

export const mutations = {
  storeCount(state, count) {
    state.count = count;
  },
  storeUploadJD(state, file) {
    state.uploadJD = file;
  },
  storeUserSelectionOption(state, index) {
    state.userSelectionOption = index
  },
  storeUserSelectionService(state, index) {
    state.userSelectionService = index
  },
  storeCurrentStep(state, currentStep) {
    state.currentStep = currentStep;
  },
};

export const actions = {
  saveCount({ commit }, count) {
    commit("storeCount", count);
  },
  saveUploadJD({ commit }, file) {
    commit("storeUploadJD", file);
  },
  saveUserSelectionOption({ commit }, index) {
    commit("storeUserSelectionOption", index);
  },
  saveUserSelectionService({ commit }, index) {
    commit("storeUserSelectionService", index);
  },
  saveCurrentStep({ commit }, currentStep) {
    commit("storeCurrentStep", currentStep);
  },
};

export const getters = {
  getCount(state) {
    return state.count;
  },
  getUploadJD(state) {
    return state.uploadJD;
  },
  getUserSelectionOption(state) {
    return state.userSelectionOption;
  },
  getUserSelectionService(state) {
    return state.userSelectionService;
  },
  getCurrentStep(state) {
    return state.currentStep;
  },
};