// import 'vueify/lib/insert-css'
import Vue from 'vue';
import ElementUI from 'element-ui';
import NEM from 'nem-sdk';
import App from './app.vue';

Vue.use(ElementUI);
const vm = new Vue({
  el: '#app',
  render: h => h(App),
});

// Set a wallet name
const swalletName = 'Sempletest';

// Set a password/passphrase
const spassword = 'Testnet@4749';

// Set a wallet name
const bwalletName = 'Braintest';

// Set a password/passphrase
const bpassword = 'Braintest@4749';

// Create Brain wallet
const Brainwallet = NEM.model.wallet.createBrain(
  bwalletName,
  bpassword,
  NEM.model.network.data.testnet.id);

// Create PRNG wallet
const Simplewallet = NEM.model.wallet.createPRNG(
  swalletName,
  spassword,
  NEM.model.network.data.testnet.id);

// Create a common object
const scommon = NEM.model.objects.create('common')('Testnet@4749', '');
const bcommon = NEM.model.objects.create('common')('Braintest@4749', '');

// Get the wallet account to decrypt
const BwalletAccount = Simplewallet.accounts[0];
const SwalletAccount = Brainwallet.accounts[0];

// Decrypt account private key
NEM.crypto.helpers.passwordToPrivatekey(bcommon, bcommon.password, BwalletAccount, Brainwallet.algo);
NEM.crypto.helpers.passwordToPrivatekey(scommon, scommon.password, SwalletAccount, Simplewallet.algo);

// The common object now has a private key
console.log(scommon);
console.log(bcommon);

vm.$mount(document.getElementById('app'));
