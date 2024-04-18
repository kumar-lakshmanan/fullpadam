<template>
  
  <div class="header">
    <div class="logo">
      <img alt="Vue logo" src="./assets/logo.png" height="50px" width="50px">
    </div>
    <div class="menu">
        <!-- Your menu content here -->
    </div>
    <div>
        <h3>Text HMT</h3>
        <p class="guest">Guest</p>
    </div>
  </div>

  <div class="body">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: Arial, sans-serif;
    }
    .header {
        height: 10%;
        width: 100%;
        background-color: #333;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        padding: 0 20px;
        position: fixed;
        top: 0;        
    }
    .logo {
        /* Your logo styles here */
        display: flex;
        align-items: center;
    }
    .menu {
        /* Your menu styles here */
    }
    .body {
        margin-top: 5%;
        height: 90%;
        width: 100%;
        background-color: #f2f2f2;

        overflow-y: auto; /* Add scrollbar only when needed */        
    }

    .header h3 {
        margin-right: 25px; /* Add left margin */
        font-size: 24px;
    }
    .header .guest {
        font-size: 14px;
        margin-right: -20px; /* Add left margin */
    }
</style>
