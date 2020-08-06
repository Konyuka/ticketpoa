<template>
  <div class="navfont">

    <b-navbar>
      <template slot="brand">
        <b-navbar-item>
          <img
          src="@/assets/img/poalogo.png"
          alt="Logo"
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <router-link :to="{ name: 'home'}">
          <b-navbar-item>
            Home
          </b-navbar-item>
        </router-link>
        <router-link :to="{ name: 'about'}">
          <b-navbar-item >
            About
          </b-navbar-item>
        </router-link>
        <router-link :to="{ name: 'about'}">
          <b-navbar-item >
            Contact
          </b-navbar-item>
        </router-link>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-success">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>

</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@font-face { font-family: Pinky; src: url('../assets/fonts/Pink.ttf'); }
@font-face { font-family: JosefinSans-VariableFont_wght; src: url('../assets/fonts/JosefinSans-VariableFont_wght.ttf'); }

.navfont{
  color: #ffffff !important;
  font-family: JosefinSans-VariableFont_wght !important;
  font-weight: 500 !important;
  font-size: 20px;
}

.navbar-item{
  color: #1c650a;
}

.navbar-brand {
    display: contents !important;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}

.bg-img {
      background-image: url(../assets/img/bg.png) ;
      background-position: center center;
      background-repeat:  no-repeat;
      background-attachment: fixed;
      background-size:  cover;
      background-color: hsl(0, 0%, 86%);

}
.navbar{
  background-color: #ffffff;
  background-image: url(../assets/img/bg.png) ;
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: hsl(0, 0%, 86%);
}
.navbar-brand {
    display: contents !important;
}
</style>
