<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #26536C;
}

#nav a.router-link-exact-active {
  color: #377596;
}
body {
  margin:0;
}
button {
  cursor: pointer;
}
.logout-button {
  background-color:#9ac247;
  color:#fff;
  padding: 0.5rem 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0,0,0,.2);
  border-radius: 5px;
  font-size:0.8rem;
  line-height:1;
  top:1.5rem;
  position:absolute;
  right:1.5rem;
}
</style>
