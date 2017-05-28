<template>

    <router-view class="container"></router-view>

</template>

<script>

export default {
  beforeCreate: function(){
    this.$router.replace('/');
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
html, body{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Roboto', sans-serif;
}


.container {
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>

