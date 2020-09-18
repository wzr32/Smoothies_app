<template>
  <div id="app">
    <div class="container">
      <img src="@/assets/logos/logo.png" alt="Smoothies Match" class="logo">
      <h4 class="mb-5">Smoothies Match</h4>
      <router-view />
    </div>
  </div>
</template>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff !important;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: #159957;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #155799, #159957);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #155799, #159957); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .logo {
    width: 4em;
    display: block;
    margin: 2em auto;
  }

  .go_back {
    font-size: 45px;
    position: absolute;
    top: 3%;
    left: 3%;
  }
  .go_back a {
    color: #fff !important;
    text-decoration: none !important;
  }  
</style>
