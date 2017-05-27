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

console.log(NEM);
// Set a wallet name
const swalletName = 'Sempletest';

// Set a password/passphrase
const spassword = 'Testnet@4749';

// Set a wallet name
const bwalletName = 'Braintest';

// Set a password/passphrase
const bpassword = 'Braintest@4749';

// Create Brain wallet
const Brainwallet = NEM.model.wallet.createBrain(bwalletName, bpassword, NEM.model.network.data.testnet.id);

// Create PRNG wallet
const Simplewallet = NEM.model.wallet.createPRNG(swalletName, spassword, NEM.model.network.data.testnet.id);
console.log(Brainwallet);
console.log(Simplewallet);
// Create a common object
const scommon = NEM.model.objects.create('common')('Testnet@4749', '');
const bcommon = NEM.model.objects.create('common')('Braintest@4749', '');

// Get the wallet account to decrypt
const SwalletAccount = Simplewallet.accounts[0];
const BwalletAccount = Brainwallet.accounts[0];
// console.log(bcommon);
// console.log(bcommon.password);
// console.log(BwalletAccount);
// console.log(BwalletAccount.algo);
// console.log(!bcommon || !bcommon.password || !BwalletAccount || !BwalletAccount.algo);
// Decrypt account private key
const spk = NEM.crypto.helpers.passwordToPrivatekey(bcommon, BwalletAccount, Brainwallet.accounts[0].algo);
const bpk = NEM.crypto.helpers.passwordToPrivatekey(scommon, SwalletAccount, Simplewallet.accounts[0].algo);

// The common object now has a private key
console.log(scommon);
console.log(bcommon);


vm.$mount(document.getElementById('app'));
