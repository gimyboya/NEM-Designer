<template>

  <section id="vpic">
      <vsidebar></vsidebar>
      <vtoolbar></vtoolbar>
      <veditor></veditor>
      <vupload></vupload>
  </section>


</template>
<script>
import Cropper from 'cropperjs';
import Vtoolbar from './toolbar_module/index';
import vupload from './vupload';
import vsidebar from './vsidebar';
import Veditor from './veditor';
import nem from 'nem-sdk';

export default {
  name: 'vnem',
  mounted: function() {
    const _this = this; // we preserve the this scope
    if(_this.$store.getters.getWtype === 'prng'){
      // for simple wallet
      const wallet = nem.model.wallet
        .createPRNG( // create a simple wallet
          _this.$store.getters.getName, 
          _this.$store.getters.getPassword, 
          nem.model.network.data.testnet.id);

      _this.$store.commit('setWallet', wallet); // push the wallet to the store just in case
      // create a common object it's the object that will contain the pass and pk
      const common = nem.model.objects.create('common')(_this.$store.getters.getPassword, ''); 
      // Get the wallet account to decrypt
      const account = wallet.accounts[0];
      // Decrypt account private key in the common object
      nem.crypto.helpers.passwordToPrivatekey(common, account, wallet.accounts[0].algo);
      _this.$store.commit('setCommon', common); // push the common to the store
    }else if(_this.$store.getters.getWtype === 'brain'){
      // for brain wallet
      const wallet = nem.model.wallet
        .createBrain( // create a brain wallet
          _this.$store.getters.getName,
          _this.$store.getters.getPassword, 
          nem.model.network.data.testnet.id);

      _this.$store.commit('setWallet', wallet); // we save the wallet
      // create a common object it's the object that will contain the pass and pk
      const common = nem.model.objects.create('common')(_this.$store.getters.getPassword, '');
      // Get the wallet account to decrypt
      const account = wallet.accounts[0];
      // Decrypt account private key in the common object
      nem.crypto.helpers.passwordToPrivatekey(common, account, wallet.accounts[0].algo);
      _this.$store.commit('setCommon', common); // push the common to the store
    }
  },
  components: {
    Cropper,
    Vtoolbar,
    vupload,
    vsidebar,
    Veditor,
  },
};
</script>

<style>
#vpic{
  border: 4px solid red;
  display: grid;
  grid-template: 120px 1fr / 30px 3fr 1fr;
}
</style>
