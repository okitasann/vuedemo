<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="header-container-banner">
      <div class>
        <div class="header-container-banner-item">
          <a class="header-container-banner-item-btn" href="home">Home</a>
          <a class="header-container-banner-item-btn" href="form" target="_blank">Form</a>
          <a class="header-container-banner-item-btn" href="vuex" target="_blank">Vuex</a>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: "App"
};
</script>

<style lang="css">
@import "./style/stylehome.css";
@import "./style/base.css";
@import "./style/m.css";
</style>
<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.header-container-content {
  height: 56px;
  max-width: 1440px;
  margin: 0 auto;
  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.header-container-logo {
  float: left;
  color: #ec7259;
  margin: 0 30px;
}

.header-container-userinfo {
  float: right;
  margin: 0 16px;
}

.header-container-userinfo-login {
  padding-left: 24px;
  padding-right: 24px;
}

.header-container-in, .header-container-in:focus, .header-container-in:hover {
  background-color: transparent;
  border-color: transparent;
}

.header-container-in {
  color: #969696;
}

.header-container-user-size {
  font-size: 16px;
  padding: 8px 16px;
}

.header-container-user-btn {
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 14px;
  padding: 4px 12px;
  color: #969696;
  background-color: #fff;
  border: 1px solid #999;
}

.header-container-userinfo-login {
  padding-left: 24px;
  padding-right: 24px;
}

.header-container-user-size {
  font-size: 16px;
  padding: 8px 16px;
}

.header-container-hv, .header-container-hv[disabled]:hover {
  color: #ec7259;
  background-color: #fff;
  border-color: #ec7259;
}

.header-container-hv._1YbC5u, .header-container-hv._1YbC5u[disabled]:hover {
  color: #fff;
  background-color: #ec7259;
  border-color: #ec7259;
}

.header-container-user-btn+.header-container-user-btn, .header-container-user-btn>.anticon+span, .header-container-user-btn>span+.anticon {
  margin-left: 8px;
}

[role=button], button {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.header-container-banner {
  display: block;
  height: 56px;
}

.header-container-banner {
  box-sizing: content-box;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
}

.header-container-banner-item {
  flex-shrink: 0;
}

.header-container-logo, .header-container-banner-item, .header-container-userinfo, .header-container-userinfo ._3Sn1bM, .header-container-banner-item-btn {
  display: flex;
  align-items: center;
  height: 56px;
}

.header-container-banner-item-btn {
  font-size: 17px;
  color: #333;
  padding: 0 20px;
  cursor: pointer;
}

.header-container-logout {
  cursor: pointer;
  color: #007bff;
  margin-left: 10px;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border-color: #007bff;
}
</style>