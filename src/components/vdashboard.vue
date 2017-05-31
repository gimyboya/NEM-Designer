<template>

  <section id="vpic">
    
    <div class="logo">
      <!-- <img src="./assets/img/logo.png" width="100px"> -->
    </div>
    <vsidebar class="vsidebar"></vsidebar>
    <vtoolbar class="vtoolbar"></vtoolbar>
    <veditor class="veditor"></veditor>
    <vupload class="vupload"></vupload>
    <nav class="links">
      <ul>
        <li><a target='_blank' href="https://t.me/nemred"><vicon name="telegram" scale="1.2"></vicon></a></li>
        <li><a target='_blank' href=""><vicon name="slack" scale="1.2" ></vicon></a></li>
        <li><a target='_blank' href="https://twitter.com/NEMofficial"><vicon name="twitter" scale="1.2" ></vicon></a></li>
        <li><a target='_blank' href="https://github.com/gimyboya/NEM-Designer"><vicon name="github" scale="1.2" ></vicon></a></li>
        <li><a target='_blank' href="https://www.nem.io/"><vicon name="globe" scale="1.2" ></vicon></a></li>
      </ul>
    </nav>
    <div class="donate">
      <p>Donate: NDNQ54-ZOWYE4-F2BYSR-CD6SSB-JRSXUU-J2PVUI-ADKA</p>
    </div>

  </section>


</template>
<script>
import Cropper from 'cropperjs';
import Vtoolbar from './vtoolbar';
import Vupload from './vupload';
import Vsidebar from './vsidebar';
import Veditor from './veditor';
import Vicon from './vicon'; 


export default {
  name: 'vdashboard',
  components: {
    Cropper,
    Vtoolbar,
    Vupload,
    Vsidebar,
    Veditor,
    Vicon,
  },
};
</script>

<style>
#vpic{
  display: grid;
  grid-template: 56px 3fr 1fr 28px / 1fr 3fr ;
  grid-template-areas: 
    "sidebar toolbar"
    "sidebar canvas"
    "logo upload"
    "links donate";
  align-items: stretch;
  justify-content: stretch;

}
.logo{ 
  grid-area: logo;
  background-color: #EFF2F7; 
  width: 100%;
  display: flex;
  flex-direction: column;

}


.logo img {
  margin: auto;
}

.vsidebar{
  grid-area: sidebar;
  background-color: #EFF2F7;

}
.vtoolbar{
  grid-area: toolbar;
  background-color: #E5E9F2;
  display: flex;
}
.veditor{
  grid-area: canvas;
  background-color: #475669;
  display: flex;
}
.vupload{
  grid-area: upload;
  background-color: #E5E9F2;
}

.links{
  grid-area: links;
  background-color: #EFF2F7;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.donate{
  grid-area: donate;
  background-color: #F7BA2A;
  display: flex;
}

.links ul{  
  margin: auto;
  padding: 0;
}
.links ul li{
  display: inline;
  list-style: none;
}
.links ul li a{
  color: #1F2D3D;
  padding: 0 7px;
}

.donate p{
  margin: auto;
}
</style>
