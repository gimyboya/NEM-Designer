import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable no-param-reassign */
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: '',
    password: '',
    address: '',
    wallet: {
      accounts: [
        {
          'network': null,
        },
      ],
    },
    common: {},
    QRMobile: {},
    QRVoucher: {},
    QRNEMpay: {},
    canvas: {},
    uploaded: false,
    cropping: false,
    actionType: '',
    // 上传的图片信息
    imgMsg: {
      type: '',
      name: '',
      url: '',
    },
    cropper: null,
    // 图像参数调整
    imgArguments: {
      brightness: 0,
      contrast: 0,
      hue: 0,
      saturation: 0,
      greyscale: false,
      invert: false,
      blur: 0,
      noise: 0,
      sharpen: 0,
    },
    imgFilter: '',
    storeUrl: '',
  },
  mutations: {
    setName(state, name) {
      state.name = name;
    },
    setPassword(state, pass) {
      state.password = pass;
    },
    setWtype(state, type) {
      state.wtype = type;
    },
    setWallet(state, wallet) {
      state.wallet = wallet;
    },
    setAddress(state, address) {
      state.address = address;
    },
    setCommon(state, common) {
      state.common = common;
    },
    setQRMobile(state, qr) {
      state.QRMobile = qr;
    },
    setQRVoucher(state, qr) {
      state.QRVoucher = qr;
    },
    setQRNEMpay(state, qr) {
      state.QRNEMpay = qr;
    },
    setCanvas(state, canvas) {
      state.canvas = canvas;
    },
    storeResult(state, url) {
      state.storeUrl = url;
    },
    setImgMsg(state, imgMsg) {
      state.imgMsg = imgMsg;
    },
    setImgUrl(state, url) {
      state.imgMsg.url = url;
    },
    cropImgMsg(state, cropMsg) {
      state.imgMsg.url = cropMsg.url;
      state.imgMsg.name = cropMsg.name;
    },
    setUpload(state) {
      state.uploaded = true;
    },
    cancelUpload(state) {
      state.uploaded = false;
    },
    setCropping(state) {
      state.cropping = true;
    },
    cancelCropping(state) {
      state.cropping = false;
    },
    setActionType(state, type) {
      state.actionType = type;
    },
    setCropper(state, cropper) {
      state.cropper = cropper;
    },
    setBrightness(state, val) {
      state.imgArguments.brightness = val;
    },
    setContrast(state, val) {
      state.imgArguments.contrast = val;
    },
    setHue(state, val) {
      state.imgArguments.hue = val;
    },
    setSaturation(state, val) {
      state.imgArguments.saturation = val;
    },
    setGreyscale(state, val) {
      state.imgArguments.greyscale = val;
    },
    setInvert(state, val) {
      state.imgArguments.invert = val;
    },
    setBlur(state, val) {
      state.imgArguments.blur = val;
    },
    setNoise(state, val) {
      state.imgArguments.noise = val;
    },
    setSharpen(state, val) {
      state.imgArguments.sharpen = val;
    },
    setFilter(state, val) {
      state.imgFilter = val;
    },
  },
  getters: {
    getWallet(state) {
      return state.wallet;
    },
    getName(state) {
      return state.name;
    },
    getPassword(state) {
      return state.password;
    },
    getNetwork(state) {
      return state.wallet.accounts[0].network;
    },
    getPrivateKey(state) {
      return state.common.privateKey;
    },
    getAddress(state) {
      return state.address;
    },
    getQRMobile(state) {
      return state.QRMobile;
    },
    getQRVoucher(state) {
      return state.QRVoucher;
    },
    getQRNEMpay(state) {
      return state.QRNEMpay;
    },
    getCanvas(state) {
      return state.canvas;
    }
  },
  actions: {
    setQRMobile({ commit }, qr) {
      commit('setQRMobile', qr);
    },
    setQRVoucher({ commit }, qr) {
      commit('setQRVoucher', qr);
    },
    setQRNEMpay({ commit }, qr) {
      commit('setQRNEMpay', qr);
    },
    storeResult({ commit }, url) {
      commit('storeResult', url);
    },
    setImgMsg({ commit }, imgMsg) {
      commit('setImgMsg', imgMsg);
    },
    setImgUrl({ commit }, url) {
      commit('setImgUrl', url);
    },
    cropImgMsg({ commit }, cropMsg) {
      commit('cropImgMsg', cropMsg);
    },
    setUpload({ commit }) {
      commit('setUpload');
    },
    setCropping({ commit }) {
      commit('setCropping');
    },
    cancelUpload({ commit }) {
      commit('cancelUpload');
    },
    cancelCropping({ commit }) {
      commit('cancelCropping');
    },
    setActionType({ commit }, actionType) {
      commit('setActionType', actionType);
    },
    setCropper({ commit }, cropper) {
      commit('setCropper', cropper);
    },
    setBrightness({ commit }, val) {
      commit('setBrightness', val);
    },
    setContrast({ commit }, val) {
      commit('setContrast', val);
    },
    setHue({ commit }, val) {
      commit('setHue', val);
    },
    setSaturation({ commit }, val) {
      commit('setSaturation', val);
    },
    setGreyscale({ commit }, val) {
      commit('setGreyscale', val);
    },
    setInvert({ commit }, val) {
      commit('setInvert', val);
    },
    setBlur({ commit }, val) {
      commit('setBlur', val);
    },
    setNoise({ commit }, val) {
      commit('setNoise', val);
    },
    setSharpen({ commit }, val) {
      commit('setSharpen', val);
    },
    testFilter({ commit }, val) {
      commit('testFilter', val);
    },
    setFilter({ commit }, val) {
      commit('setFilter', val);
    },
  },
});

export default store;
